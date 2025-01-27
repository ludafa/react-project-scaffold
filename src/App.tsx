export function App() {
  return (
    <div className="text-gray-700 md:(mx-auto w-5xl)">
      <h1 className="my-4 flex text-xl space-x-4">
        <i className="i-logos:github-icon inline-block h-8 w-8 animated animated-tada animated-infinite" />
        <i className="i-logos:vitejs inline-block h-8 w-8 animated animated-rubber-band animated-infinite" />
        <i className="i-logos:react inline-block h-8 w-8 animated animated-jello animated-infinite" />
        <i className="i-logos:typescript-icon inline-block h-8 w-8 animated animated-heart-beat animated-infinite" />
      </h1>
      <h1 className="my-4 text-xl font-bold">Features</h1>
      <ul className="list-decimal pl-4">
        <li>
          <h2 className="my-3 text-lg">
            css features: uno supported with usefully plugin
          </h2>
          <ul className="list-decimal pl-4">
            <li className="my-2">
              <p className="text-md">
                <code className="mx-1 rounded bg-gray-200 px-[0.25em] py-[0.1em]">
                  @apply
                </code>
                directive in css file
              </p>
            </li>
            <li className="my-2">
              <p className="text-md">icon preset enabled</p>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="my-3 text-lg">
            <p>prettier x eslint embedded</p>
          </h2>
        </li>
        <li>
          <h2 className="my-3 text-lg">vscode plugins:</h2>
          <ul className="list-decimal pl-4">
            <li>
              unocss plugin conflicts with tailwindcss plugin. please disable
              tailwindcss plugin.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
