import { useState, useMemo } from "react";

/**
 * A hook similar to React's `useState` which allows you to also pass promises which resolve to the next state.
 *
 * Also returns an extra method which extends the current state, synchronously and/or asynchronously.
 * For the current state to be extended, it must first be a non-null value.
 *
 * Example:
 * ```ts
 * interface State {
 *   foo: string
 *   bar: string
 * }
 *
 * const [ state, setState, extendState ] = useAsyncExtendedState<State>({
 *   foo: 'foo',
 *   bar: 'bar'
 * })
 *
 * // This works as usual.
 * setState({ foo: 'Hello', bar: 'World!' })
 * setState(state => ({ foo: 'Hello', bar: 'World!' }))
 *
 * // This also works.
 * const fetchState = () => API.client.get<State>('data').then(response => {
 *   return response.data
 *
 *   // or return (state: State) => {
 *     // return response.data
 *   // }
 * })
 *
 * // The state will eventually be set to the asynchronously resolved value.
 * setState(fetchState())
 *
 * // Or extend the state immediately.
 * extendState({ foo: 'Hello' })
 * extendState(state => ({ bar: 'World!' }))
 *
 * // Or extend the state asynchronously.
 * const fetchPartialState = () => API.client.get<Partial<State>>('data').then(response => {
 *   return response.data
 *
 *   // or return (state: State) => {
 *     // return response.data
 *   // }
 * })
 *
 * // The state will eventually be extended by the asynchronously resolved value.
 * extendState(fetchPartialState())
 * ```
 */
export const useAsyncExtendedState = (initialState) => {
  const [state, setState] = useState(initialState);

  const asyncSetState = useMemo(
    () => async (nextState) => {
      const initialNextState = nextState;

      try {
        if (nextState instanceof Promise) {
          nextState = await nextState;

          if (nextState === initialNextState) {
            // there was an error but it was caught by something else - i.e., nextState.catch()
            throw new Error(`Uncatchable error.`);
          }
        }

        setState((state) => {
          if (typeof nextState === `function`) {
            nextState = nextState(state);
          }

          return nextState;
        });
      } catch (error) {}
    },
    []
  );

  const asyncExtendState = useMemo(
    () => async (extendState) => {
      const initialExtendState = extendState;

      try {
        if (extendState instanceof Promise) {
          extendState = await extendState;

          if (extendState === initialExtendState) {
            // there was an error but it was caught by something else - i.e., extendState.catch()
            throw new Error(`Uncatchable error.`);
          }
        }

        setState((state) => {
          if (typeof extendState === `function`) {
            extendState = extendState(state);
          }

          return { ...state, ...extendState };
        });
      } catch (err) {}
    },
    []
  );

  return [state, asyncSetState, asyncExtendState];
};
