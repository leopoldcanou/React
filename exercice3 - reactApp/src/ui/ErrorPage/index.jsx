import { useRouteError } from "react-router-dom";
import img2 from "./459.gif";
import img3 from "./4x.png";
import { useEffect, useState } from "react";


try {
  const button = document.getElementById("emojibutton");
  button.addEventListener("click", () => {


    const img = document.createElement("img");
    img.src = img3;
    // in the middle of the screen
    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    img.style.zIndex = "1000";
    // scale
    img.style.width = "50%";

    document.body.appendChild(img);
  }
  );

}
catch (e) {
  console.error(e);
}


export default function ErrorPage() {
  const error = useRouteError();
  const [value, setValue] = useState(0);

  console.error(error);
  // random number between 1 and 100 errors changing every second
  useEffect(() => {
    const interval = setInterval(() => {
      const value = Math.floor(Math.random() * 100) + 1;
      setValue(value);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center my-20 space-y-5">
      <h1 className="text-8xl animate-bounce">🤓</h1>
      <p><span className="text-3xl font-bold">AcTuAllY</span> there are <span className="font-bold text-red-600">{value}</span> errors</p>

      {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}

      {/* <img src={img} alt="Error GIF" className="w-52" /> */}
      <img src={img2} alt="Error GIF" className="w-52" />
      <button id="emojibutton" className="px-6 py-2 text-white bg-blue-400 rounded-lg">Fix Errors</button>
    </div>
  );
}
