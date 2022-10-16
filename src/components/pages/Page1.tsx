import axios from "axios";
import { useState } from "react";

function Page1() {
    const [imageUrl, setImageUrl] = useState("");
    const fetchImage = async () => {
        const res = await axios.get("http://localhost:8000/api");
        setImageUrl(res.data.path);
};


return (
    <div className="App">
        <button onClick={() => fetchImage()}>Graph1</button>
        {imageUrl && <img src={imageUrl} alt="ame4" />}
    </div>
);
}

export default Page1;

