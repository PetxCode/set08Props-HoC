import { useEffect, useRef, useState } from "react";
import Button from "./reUser/Button";
import GlobalButton from "./reUser/GlobalButton";
import Input from "./reUser/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyButton from "./reUser/buttonUsed/MyButton";
import ButtonBuild from "./build/ButtonBuild";
import FormInput from "./build/FormInput";
import MagixInput from "./build/MagixInput";

const HomeScreen = () => {
  const [state, setState]: any = useState();
  const [data, setData]: any = useState<string>("");

  const yupSchema = yup.object({
    email: yup.string(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const onSubmitted = handleSubmit((data) => {
    console.log(data);
    console.log(state);
  });

  return (
    <div className="w-full">
      <div className="grid w-full lg:grid-cols-3 gap-2 grid-cols-2 ">
        <div className="bg-blue-500 border text-white rounded-md p-4">
          start
        </div>
        <div className="h-[250px] bg-blue-500 border text-white rounded-md p-4">
          start
        </div>
        <div
          className="border text-white rounded-md 
      col-span-3 lg:col-span-1 grid gap-2  
      "
        >
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
          <div className="bg-pink-500 p-4 rounded-md">start1</div>
        </div>
      </div>

      <div className="mt-8 w-full grid grid-flow-row  grid-cols-1 md:grid-cols-5  gap-2 text-white">
        <div className="bg-white p-4 border rounded-md col-span-3 h-[150vh]">
          <Button>Click Here</Button>
          <Button intent="danger">Click red</Button>

          <GlobalButton>Global</GlobalButton>
          <GlobalButton
            onClick={() => {
              console.log("first");
            }}
            intents="danger"
          >
            start
          </GlobalButton>

          <GlobalButton intents={"secondary"}>Push</GlobalButton>

          <br />

          <form onSubmit={onSubmitted}>
            <Input
              {...register("email")}
              placeholder="inter"
              value={state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
                // setState({ ...register("email") });
              }}
            >
              Input
            </Input>
            <GlobalButton
              intents={"secondary"}
              type="submit"
              // onClick={() => {
              //   console.log(state);
              // }}
            >
              submit
            </GlobalButton>
          </form>
          <br />
          <br />
          <br />
          <hr />
          <br />
          <MyButton>Petr</MyButton>
          <MyButton>Bukky</MyButton>
          <MyButton myTypes={"others"} size={"lg"}>
            Kemi
          </MyButton>
        </div>
        <div className=" sticky top-2 bg-purple-500 col-span-2 p-4 border rounded-md h-[550px]">
          <div>
            <div>testing this props</div>
            <br />
            <br />

            <hr />
            <br />

            <ButtonBuild>button</ButtonBuild>
            <ButtonBuild className="bg-red-500 hover:bg-red-600 ">
              button
            </ButtonBuild>
            <ButtonBuild className="bg-black hover:bg-neutral-700 ">
              button
            </ButtonBuild>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div>hh</div>
          <FormInput>start</FormInput> <br />
          <br />
          <hr />
          <br />
          <MagixInput
            valueData={data}
            onChange={(e: any) => {
              setData(e.target.value);
            }}
            // className="border-blue-400 "
            basedColor2="border-blue-400"
            basedColor="border-red-600"
          >
            Let's do this
          </MagixInput>{" "}
          <div>data: {data}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
