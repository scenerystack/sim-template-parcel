import { init } from 'scenerystack/init';

init( {
  // Internal name of the simulation.
  name: 'simulation-name',

  // Version (will be shown in the About dialog)
  version: '1.0.0',

  // The brand name used (should be the same as in brand.ts)
  brand: 'adapted-from-phet',

  // Should be one of the keys from https://github.com/phetsims/babel/blob/main/localeData.json
  locale: 'en',

  // Image to show while loading the simulation. Can be any image URL.
  splashDataURI: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNzMiIGhlaWdodD0iMTMwIiB2aWV3Qm94PSIwIDAgMjczIDEzMCI+PGcgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1Ljg4IDI4LjM2NXEtMS42NzQgMS40MjItMy4yMjEgMi4wMDhhOS4zIDkuMyAwIDAgMS0zLjMyMS41ODVxLTIuOTI4IDAtNC41MDEtMS40MzEtMS41NzMtMS40My0xLjU3My0zLjY1NSAwLTEuMzA1LjU5NC0yLjM4NWE0LjkgNC45IDAgMCAxIDEuNTU2LTEuNzMxIDcuMyA3LjMgMCAwIDEgMi4xNjctLjk4N3EuODg2LS4yMzQgMi42NzctLjQ1MiAzLjY0OC0uNDM1IDUuMzcxLTEuMDM3LjAxNy0uNjE5LjAxNy0uNzg2IDAtMS44NDEtLjg1My0yLjU5NC0xLjE1NS0xLjAyLTMuNDMtMS4wMjEtMi4xMjUgMC0zLjEzNy43NDQtMS4wMTIuNzQ1LTEuNDk4IDIuNjM2bC0yLjk0NS0uNDAxcS40MDEtMS44OSAxLjMyMi0zLjA1NC45Mi0xLjE2MyAyLjY2MS0xLjc5IDEuNzQtLjYyOCA0LjAzMi0uNjI4IDIuMjc2IDAgMy42OTguNTM1IDEuNDIyLjUzNiAyLjA5MSAxLjM0OHQuOTM3IDIuMDQ5cS4xNTEuNzcuMTUxIDIuNzc4djQuMDE2cTAgNC4yLjE5MiA1LjMxMnQuNzYxIDIuMTM0aC0zLjE0NnEtLjQ2OC0uOTM5LS42MDItMi4xOTNtLS4yNTEtNi43MjZxLTEuNjQuNjY5LTQuOTE5IDEuMTM4LTEuODU3LjI2OC0yLjYyNy42MDN0LTEuMTg4Ljk3OS0uNDE4IDEuNDMxcTAgMS4yMDUuOTEyIDIuMDA4LjkxMS44MDMgMi42NjguODAzIDEuNzQgMCAzLjA5NS0uNzYxIDEuMzU2LS43NjIgMS45OTEtMi4wODMuNDg2LTEuMDIxLjQ4NS0zLjAxMnptMTkuMjQyIDguOTE4di0yLjI0MnEtMS42OSAyLjY0NC00Ljk2OSAyLjY0NGE2Ljk3IDYuOTcgMCAwIDEtMy45MDctMS4xNzFxLTEuNzgyLTEuMTcxLTIuNzYxLTMuMjcxLS45NzgtMi4xLS45NzktNC44MjcgMC0yLjY2Ljg4Ny00LjgyN3QyLjY2LTMuMzIxIDMuOTY2LTEuMTU0cTEuNjA2IDAgMi44NjEuNjc4YTYgNiAwIDAgMSAyLjA0MiAxLjc2NlY2LjAyN2gyLjk5NXYyNC41Mjl6bS05LjUyLTguODY5cTAgMy40MTMgMS40MzkgNS4xMDQgMS40MzkgMS42OSAzLjM5NiAxLjY4OSAxLjk3NCAwIDMuMzU1LTEuNjE0IDEuMzgtMS42MTQgMS4zOC00LjkyOCAwLTMuNjQ4LTEuNDA2LTUuMzU0LTEuNDA1LTEuNzA4LTMuNDYzLTEuNzA3LTIuMDA4IDAtMy4zNTQgMS42NC0xLjM0OCAxLjY0LTEuMzQ3IDUuMTdtMjguNjQ1IDYuNjc3cS0xLjY3NCAxLjQyMi0zLjIyMSAyLjAwOGE5LjMgOS4zIDAgMCAxLTMuMzIxLjU4NXEtMi45MjggMC00LjUwMS0xLjQzMS0xLjU3My0xLjQzLTEuNTczLTMuNjU1IDAtMS4zMDUuNTk0LTIuMzg1YTQuOSA0LjkgMCAwIDEgMS41NTYtMS43MzEgNy4zIDcuMyAwIDAgMSAyLjE2Ny0uOTg3cS44ODYtLjIzNCAyLjY3Ny0uNDUyIDMuNjQ4LS40MzUgNS4zNzEtMS4wMzcuMDE3LS42MTkuMDE3LS43ODYgMC0xLjg0MS0uODUzLTIuNTk0LTEuMTU2LTEuMDItMy40My0xLjAyMS0yLjEyNSAwLTMuMTM3Ljc0NC0xLjAxMi43NDUtMS40OTggMi42MzZsLTIuOTQ1LS40MDFxLjQwMS0xLjg5IDEuMzIyLTMuMDU0LjkyLTEuMTYzIDIuNjYxLTEuNzkgMS43NC0uNjI4IDQuMDMyLS42MjggMi4yNzYgMCAzLjY5OC41MzUgMS40MjIuNTM2IDIuMDkxIDEuMzQ4dC45MzcgMi4wNDlxLjE1MS43Ny4xNTEgMi43Nzh2NC4wMTZxMCA0LjIuMTkyIDUuMzEydC43NjEgMi4xMzRoLTMuMTQ2cS0uNDY4LS45MzktLjYwMi0yLjE5M20tLjI1MS02LjcyNnEtMS42NC42NjktNC45MTkgMS4xMzgtMS44NTcuMjY4LTIuNjI3LjYwM3QtMS4xODguOTc5LS40MTggMS40MzFxMCAxLjIwNS45MTIgMi4wMDguOTExLjgwMyAyLjY2OC44MDMgMS43NCAwIDMuMDk1LS43NjEgMS4zNTYtLjc2MiAxLjk5MS0yLjA4My40ODUtMS4wMjEuNDg1LTMuMDEyem03LjcxMyAxNS43MjdWMTIuNzg3aDIuNzQ0djIuMzFxLjk3LTEuMzU1IDIuMTkyLTIuMDMzIDEuMjIxLS42NzggMi45NjEtLjY3OCAyLjI3NSAwIDQuMDE2IDEuMTcxIDEuNzQgMS4xNzIgMi42MjcgMy4zMDV0Ljg4NyA0LjY3N3EwIDIuNzI3LS45NzkgNC45MTEtLjk4IDIuMTgzLTIuODQ1IDMuMzQ2Yy0xLjg2NSAxLjE2My0yLjU1MiAxLjE2My0zLjkyMyAxLjE2M3EtMS41MDYgMC0yLjcwMy0uNjM2dC0xLjk2Ni0xLjYwNnY4LjY1em0yLjcyOC0xNS41OTRxMCAzLjQzIDEuMzg5IDUuMDY5IDEuMzg4IDEuNjQgMy4zNjMgMS42NCAyLjAwOSAwIDMuNDM4LTEuNjk4IDEuNDMxLTEuNjk4IDEuNDMxLTUuMjYyIDAtMy4zOTctMS4zOTctNS4wODd0LTMuMzM4LTEuNjg5cS0xLjkyNCAwLTMuNDA1IDEuNzk5Yy0xLjQ4MSAxLjc5OS0xLjQ4MSAyLjk0Mi0xLjQ4MSA1LjIyOG0yMi45MDUgNi4wOTEuNDM1IDIuNjZxLTEuMjcyLjI2OC0yLjI3NS4yNjgtMS42NCAwLTIuNTQzLS41MTljLS45MDMtLjUxOS0xLjAyNi0uODAxLTEuMjcxLTEuMzY0cS0uMzY4LS44NDQtLjM2OC0zLjU1NlYxNS4xM2gtMi4yMDh2LTIuMzQzaDIuMjA4di00LjRsMi45OTUtMS44MDd2Ni4yMDdoMy4wMjh2Mi4zNDNoLTMuMDI4djEwLjM5MXEwIDEuMjg5LjE1OSAxLjY1NnQuNTE5LjU4NnEuMzYuMjE3IDEuMDI5LjIxN2ExMCAxMCAwIDAgMCAxLjMyLS4xMTdtMTUuMTA5LTMuMDI5IDMuMTEyLjM4NXEtLjczNiAyLjcyNy0yLjcyOCA0LjIzM2MtMS45OTIgMS41MDYtMy4wMjMgMS41MDYtNS4wODYgMS41MDZxLTMuODk4IDAtNi4xODMtMi40LTIuMjg0LTIuNDAyLTIuMjg0LTYuNzM1IDAtNC40ODQgMi4zMDktNi45NnQ1Ljk5LTIuNDc3cTMuNTY0IDAgNS44MjMgMi40MjZ0Mi4yNTkgNi44MjdxMCAuMjY4LS4wMTcuODAzaC0xMy4yNXEuMTY3IDIuOTI4IDEuNjU2IDQuNDg0dDMuNzE0IDEuNTU2cTEuNjU2IDAgMi44MjgtLjg2OSAxLjE3Mi0uODcgMS44NTctMi43NzltLTkuODg4LTQuODY4aDkuOTIycS0uMi0yLjI0Mi0xLjEzOC0zLjM2My0xLjQzOS0xLjc0LTMuNzMxLTEuNzQtMi4wNzQgMC0zLjQ4OSAxLjM4OWMtMS40MTUgMS4zODktMS40NjQgMi4xNjMtMS41NjQgMy43MTRtMjguMzEgMTAuNTkxdi0yLjI0MnEtMS42OSAyLjY0NC00Ljk2OSAyLjY0NGE2Ljk3IDYuOTcgMCAwIDEtMy45MDctMS4xNzFxLTEuNzgyLTEuMTcxLTIuNzYxLTMuMjcxdC0uOTc5LTQuODI3cTAtMi42Ni44ODctNC44Mjd0Mi42Ni0zLjMyMSAzLjk2Ni0xLjE1NHExLjYwNiAwIDIuODYxLjY3OGE2IDYgMCAwIDEgMi4wNDIgMS43NjZWNi4wMjdoMi45OTV2MjQuNTI5em0tOS41Mi04Ljg2OXEwIDMuNDEzIDEuNDM5IDUuMTA0IDEuNDM4IDEuNjkgMy4zOTYgMS42ODkgMS45NzQgMCAzLjM1NS0xLjYxNCAxLjM4LTEuNjE0IDEuMzgtNC45MjggMC0zLjY0OC0xLjQwNi01LjM1NC0xLjQwNS0xLjcwOC0zLjQ2My0xLjcwNy0yLjAwOCAwLTMuMzU0IDEuNjQtMS4zNDggMS42NC0xLjM0NyA1LjE3bTI3LjI5MSA4Ljg2OVYxNS4xM2gtMi42NjJ2LTIuMzQzaDIuNjYydi0xLjg5MXEtLjAwMS0xLjc5LjMxNi0yLjY2LjQzNS0xLjE3IDEuNTMxLTEuODk5IDEuMDk1LS43MjggMy4wNy0uNzI4IDEuMjcyIDAgMi44MTEuMzAxbC0uNDUxIDIuNjI3YTEwIDEwIDAgMCAwLTEuNzczLS4xNjdxLTEuMzcyIDAtMS45NC41ODZjLS41NjguNTg2LS41NjcgMS4xMjEtLjU2NyAyLjE5MXYxLjY0aDMuNDYzdjIuMzQzaC0zLjQ2M3YxNS40Mjd6bTguNzY1IDB2LTE3Ljc3aDIuNzExdjIuNjk0cTEuMDM3LTEuODkyIDEuOTE2LTIuNDkzYTMuMzUgMy4zNSAwIDAgMSAxLjkzMy0uNjAzcTEuNTI0IDAgMy4wOTUuOTcxbC0xLjAzNyAyLjc5NHEtMS4xMDQtLjY1Mi0yLjIwNy0uNjUyLS45ODcgMC0xLjc3NC41OTQtLjc4NC41OTQtMS4xMiAxLjY0OC0uNTAyIDEuNjA2LS41MDIgMy41MTR2OS4zMDN6bTEwLjMyNC04Ljg4NXEwLTQuOTM2IDIuNzQ0LTcuMzEyIDIuMjktMS45NzQgNS41ODgtMS45NzUgMy42NjMgMCA1Ljk5IDIuNDAxIDIuMzI2IDIuNCAyLjMyNSA2LjYzNC0uMDAxIDMuNDMtMS4wMjggNS4zOTZhNy4zIDcuMyAwIDAgMS0yLjk5NCAzLjA1NHEtMS45NjcgMS4wODctNC4yOTMgMS4wODctMy43MyAwLTYuMDMxLTIuMzkzLTIuMy0yLjM5LTIuMzAxLTYuODkybTMuMDk2IDBxMCAzLjQxMyAxLjQ4OCA1LjExMSAxLjQ4OCAxLjY5OSAzLjc0OCAxLjY5OCAyLjI0IDAgMy43MzEtMS43MDYgMS40ODgtMS43MDcgMS40ODgtNS4yMDQgMC0zLjI5Ni0xLjQ5OC00Ljk5NC0xLjQ5Ni0xLjY5OC0zLjcyNC0xLjY5OC0yLjI1OCAwLTMuNzQ4IDEuNjg5LTEuNDg0IDEuNjktMS40ODUgNS4xMDRtMTcuMDgzIDguODg1di0xNy43N2gyLjY5NHYyLjQ5M2E2LjM0IDYuMzQgMCAwIDEgMi4yMjUtMi4xcTEuMzg5LS43OTQgMy4xNjItLjc5NSAxLjk3NSAwIDMuMjM4LjgydDEuNzgxIDIuMjkycTIuMTA4LTMuMTEyIDUuNDg3LTMuMTEyIDIuNjQ0IDAgNC4wNjUgMS40NjR0MS40MjIgNC41MXYxMi4xOTdoLTIuOTk0VjE5LjM2M3EwLTEuODA3LS4yOTItMi42MDNjLS4xOTUtLjUyOS0uNTUyLS45NTYtMS4wNjItMS4yNzlxLS43NzItLjQ4NS0xLjgwOS0uNDg1LTEuODczIDAtMy4xMTIgMS4yNDYtMS4yMzcgMS4yNDYtMS4yMzcgMy45OTF2MTAuMzIzaC0zLjAxM1YxOS4wMTJxMC0yLjAwOC0uNzM1LTMuMDEyYy0uNzM1LTEuMDA0LTEuMjk1LTEuMDA0LTIuNDA5LTEuMDA0cS0xLjI3MyAwLTIuMzUxLjY2OS0xLjA4MS42Ny0xLjU2NCAxLjk1OC0uNDg2IDEuMjg4LS40ODUgMy43MTR2OS4yMnpNNDYuMTI2IDcwLjAyM2MwIDQuNDk4LTMuNTI1IDguNzYtOS41OCA4Ljc2SDI0LjA3VjYxLjI2NmgxMi40NzZjNi4wNTQgMCA5LjU4IDQuMjU1IDkuNTggOC43NTdtMjIuMDU2IDBjMC0xNC4yNDEtMTAuNzExLTI3Ljg2Ni0zMC42MjEtMjcuODY2SDIuMDI1djg2LjY0MWgyMi4wNDZWOTcuODkzaDEzLjQ5M2MxOS45MDcgMCAzMC42MTgtMTMuNjMzIDMwLjYxOC0yNy44N20xMzcuMTM4IDU4Ljc4MmgtNjAuOTlWNDIuMTU4aDEyNi42NDV2MTguOTg3aC0yMi4wNDd2NjcuNjZoLTIyLjA1NXYtNjcuNjZoLTYwLjQ5NHYxNC40OGgzMy4yNjd2MTguOTg2aC0zMy4yNjd2MTUuMjEyaDM4Ljk0MXptLTgyLjYwNS02Mi45MjRjLTEyLjA5Ni01Ljg5OS0yNS45MDItLjMyMi0yNS45MDItLjMyMlY0Mi4xNjFINzIuODMxdjg2LjY0NGgyMy40NzN2LTMzLjA3aC4wMzhhOSA5IDAgMCAxLS4wMzgtLjczOWMwLTUuNDIxIDQuMzk2LTkuODI0IDkuODE5LTkuODI0IDUuNDE2IDAgOS44MTYgNC40MDIgOS44MTYgOS44MjQgMCAuMjQ4LS4wMTcuNDk4LS4wMzguNzM5aC4wMzh2MzMuMDdoMjEuODd2LTMxLjcyYy0uMDAyLTEyLjM5LS43OTktMjQuMjMzLTE1LjA5NC0zMS4yMDQiLz48cGF0aCBkPSJNMjU1LjQzNiAxMjguODV2LTguODQ4aC0zLjMwM3YtMS4xODJoNy45NTF2MS4xODJoLTMuMzJ2OC44NDh6bTUuOTY4IDB2LTEwLjAzaDEuOTk4bDIuMzczIDcuMXEuMzI5Ljk5Mi40NzkgMS40ODVjLjExMy0uMzY1LjI5My0uOS41MzEtMS42MDdsMi40MDQtNi45NzhoMS43ODV2MTAuMDI5aC0xLjI4MXYtOC4zOTVsLTIuOTE0IDguMzk1aC0xLjE5M2wtMi45MDItOC41Mzl2OC41MzloLTEuMjh6Ii8+PC9nPjwvc3ZnPg==',

  isDebugBuild: false,
  allowLocaleSwitching: true
} );
