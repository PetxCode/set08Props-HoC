import React, {
  FC,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface iProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

const FormInput: FC<iProps> = ({ children, ...props }) => {
  const myInput: React.MutableRefObject<any> = useRef(null);
  const [value, setValue] = useState<boolean>(false);

  const [val, setVal] = useState<boolean>(false);
  useEffect(() => {
    if (val && myInput.current) {
      myInput.current.focus();
    }
  }, [val]);

  return (
    <div
      className={`
    border p-1 rounded-md relative h-12 transition-all duration-300
    ${val ? "border-red-400 " : ""} my-3
    `}
      onClick={() => {
        setValue(true);
        setVal(true);
      }}
    >
      <div className="text-[12px] absolute -top-3 left-3  px-1  bg-purple-500 ">
        {children}
      </div>
      <input
        ref={myInput}
        {...props}
        className="w-full h-full bg-transparent outline-none "
        placeholder={`${children}`}
        onFocus={() => {
          setValue(true);
          setVal(true);
        }}
        onBlur={() => {
          setValue(false);
          setVal(false);
        }}
      />
    </div>
  );
};

export default FormInput;
