# timeallot-webapp

Frontend in React for the focus timer app timeallot. <br> Not yet connected to
backend.

## Install yarn

```sh
$ yarn
```

## Start server

```sh
$ yarn start
```

## Run tests

```sh
$ yarn test
```

## Troubleshooting

Some odd error? Try running `yarn` again, and it might fix it.

### Error when running Tests

For some unknown reason, running "yarn test" might crash unless you run the
following first.

```sh
$ rm -rf node_modules && yarn cache clean && yarn
```

Then it works again and the tests run, but might it might crash again when
trying later.
