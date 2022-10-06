import React, { useRef, useState } from "react";
import "./input.css";
import InputCard from "./InputCard";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Imagetesting() {
  const [user, setUser] = useState([]);
  // const [image, setImage] = useState();
  const { register, handleSubmit } = useForm();

  const [note, setNote] = useState({
    username: "",
    fname: "",
    email: "",
    image: [],
    cnicImage: [],
  });

  function HandleForm(e) {
    e.preventDefault();

    const { username, fname, email, image, cnicImage } = note;
    const data = new FormData();
    data.append("username", username);
    data.append("fname", fname);
    data.append("email", email);
    // data.append("image", image);
    image.map((it) => {
      console.log(it);
      data.append("image", it);
    });
    cnicImage.map((it) => {
      console.log(it);
      data.append("cnicImage", it);
    });

    // for (let key in note) {
    //   data.append(key, note[key]);
    // }

    console.log("lets try ", data);
    //   "content-type": "multipart/formdata"
    // }}

    axios.post("http://localhost:9000/image", data, {
      header: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  const inputEventValue = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  // const inputEventFile = (e) => {
  //   e.preventDefault();
  //   setNote((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.name]: [...e.target.files],
  // [e.target.name]: { file: [...file, ...e.target.files] },
  //     };
  //   });
  // };

  const input = [
    {
      id: 1,
      name: "username",
      placeholder: "UserName",
      type: "text",
      onChange: inputEventValue,
    },
    {
      id: 2,
      name: "fname",
      placeholder: "Father Name",
      type: "text",
      onChange: inputEventValue,
    },
    {
      id: 3,
      name: "email",
      placeholder: "Email",
      type: "text",
      onChange: inputEventValue,
    },
    {
      id: 4,
      name: "image",
      placeholder: "Password",
      type: "file",
      onChange: (e) => setNote({ ...note, image: [...e.target.files] }),
    },
    {
      id: 5,
      name: "cnicImage",
      type: "file",
      multiple: "multiple",
      onChange: (e) => setNote({ ...note, cnicImage: [...e.target.files] }),
    },
  ];

  // (e)=>{
  //   setNote(...note,cnicImage:[...e.target.files])
  // }

  return (
    <div className="clientform__container">
      <div className="clientform__main" id="clientform-form-intro2">
        <div className="form">
          <h2 className="text-white h2 ">clientform</h2>
          <form className="clientform__form">
            <div className="">
              {input.map((input) => {
                return (
                  <>
                    <InputCard
                      key={input.id}
                      {...input}
                      onChange={input.onChange}
                    />
                  </>
                );
              })}
            </div>
            <button onClick={HandleForm} className="clientform__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// const onChange = (e) => {
//   if (inputEventValue) {
//     inputEventValue();
//   } else if (inputEventFile) {
//     inputEventFile();
//   }
// };
