import { useState } from "react"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addUsedAndNewCars } from "../redux/features/card/cardSlice";

const AddCars = () => {

  const dispatch: AppDispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    tag:"",
  })
  
  const [image, setImage] = useState<File | null>(null);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  console.log(formData)
}

const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  if (e.target.files) {
    const imageFile = e.target.files[0];
    setImage(imageFile);
  }
  // const fd = new FormData();
  // fd.append('image', imageFile);
}


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const fd = new FormData();

  // Add all form data including image
  Object.entries(formData).forEach(([key, value]) => fd.append(key, value));

  if (image) {
    fd.append('image', image); // Append image separately if needed
  }

  dispatch(addUsedAndNewCars(fd)); // Pass entire FormData object 
  setFormData({
    title: "",
    description: "",
    price: "",
    location: "",
    tag:"",
  })
}

  return (
    <div className="p-2">
      <h1 className="text-3xl p-2 text-center">Add Cars</h1>
      <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title"  className="p-2" onChange={handleChange}/>
        <input type="text" name="description" placeholder="Description"  className="p-2" onChange={handleChange}/>
        <input type="text" name="price" placeholder="Price"  className="p-2" onChange={handleChange}/>
        <input type="text" name="location" placeholder="Location"  className="p-2" onChange={handleChange}/>
        <select name="tag" id="" className="p-2" onChange={handleSelectChange}>
          <option value="">Select Tag</option>
          <option value="private">Private</option>
          <option value="dealer">Dealer</option>
        </select>
        <input type="file" accept="image/png, image/jpeg, image/jpg" placeholder="Image"  className="p-2" onChange={handleImageChange}/>
        <button type="submit" className="bg-sky-500 p-2 text-white">Submit</button>
      </form>
    </div>
  )
}

export default AddCars