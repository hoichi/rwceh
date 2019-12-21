type fetchError = [ | `FetchError(Js.Promise.error)];

type t('d, 'e) =
  | Fetching
  | Complete(result('d, [> fetchError] as 'e));

let useFetch = url => {
  let (state, setState) = React.useState(_ => Fetching);

  React.useEffect1(
    () => {
      Js.Promise.(
        Fetch.fetch(url)
        |> then_(Fetch.Response.json)
        |> then_(json => setState(_ => Complete(Ok(json))) |> resolve)
        |> catch(error =>
             `FetchError(error)
             |> (error => setState(_ => Complete(Error(error))) |> resolve)
           )
        |> ignore
      );

      None;
    },
    [|url|],
  );

  state;
};

let mapOk = (t, f) =>
  switch (t) {
  | Fetching => Fetching
  | Complete(Ok(r)) => Complete(f(r))
  | Complete(Error(_)) as e => e
  };
