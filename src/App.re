[@react.component]
let make = () => {
  UseFetch.(
    useFetch(
      "https://api.github.com/search/repositories?q=language:reason&sort=stars&order=desc",
    )
    ->mapOk(r => GhRepo.t_decode(r)->Decode.mapDecodingError)
    ->(
        fun
        | Fetching => ReasonReact.string("Loading...")
        | Complete(Ok(({items}: GhRepo.t))) =>
          <ul>
            {Belt.Array.map(items, ({fullName, htmlUrl}: GhRepo.repo) =>
               <li key=fullName>
                 <a href=htmlUrl> {ReasonReact.string(fullName)} </a>
               </li>
             )
             ->React.array}
          </ul>
        | Complete(Error(`FetchError(_))) =>
          <div> {ReasonReact.string("Fetch error!")} </div>
        | Complete(Error(`DecodeError((err: Decco.decodeError)))) =>
          <div>
            <h2> {ReasonReact.string("Decode error!")} </h2>
            <ul>
              <li> {ReasonReact.string(err.path)} </li>
              <li> {ReasonReact.string(err.message)} </li>
              <li> {ReasonReact.string(err.value->Js.Json.stringify)} </li>
            </ul>
          </div>
      )
  );
};
