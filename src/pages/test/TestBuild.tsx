import React, { FC, useEffect, useState } from "react";

interface iComp {
  Component?: React.ReactNode;
}

const wrapCompHOC = (Component: any) => {
  return (props: any) => (
    <div className="text-red-900 text-[30px]">
      <Component {...props} />
    </div>
  );
};

const Start = () => {
  return <div>Just starting</div>;
};

const StartII = () => {
  return <div>This class is super awesome</div>;
};

const countWrapper = (Component: any) => {
  return (props: any) => {
    const [state, setState] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => {
        setState(false);
      }, 3000);
    }, []);

    return <div>{state ? <div>Loading</div> : <Component {...props} />}</div>;
  };
};

const Counter = () => {
  return (
    <div className="">
      <h1>Counter</h1>
    </div>
  );
};

const CounterII = () => {
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };

  return (
    <div className="">
      <h1 onMouseEnter={add}>Counter hover</h1>

      {state}
    </div>
  );
};

const DsplayCount = countWrapper(Counter);
const TestBuild = () => {
  return (
    <div>
      <div>Viewing HOC</div>
      <DsplayCount />
    </div>
  );
};

export default TestBuild;
