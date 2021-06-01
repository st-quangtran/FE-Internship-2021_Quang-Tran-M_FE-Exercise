import React from 'react';

export const pageRenderer = (Wrapped: any) => {
  return function (props: any) {
    const { data } = props;
    const render = () => {
      if (!data) {
        return <p>Loading...</p>;
      } else {
        if (Array.isArray(data)) {
          if (!data.length) {
            return <p>Empty...</p>;
          } else {
            return <Wrapped {...props}/>;
          }
        } else {
          return <Wrapped {...props}/>;
        }
      }
    }
    return (
      <>
        {render()}
      </>
    )
  }
}
