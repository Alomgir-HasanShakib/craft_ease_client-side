import { useLoaderData } from "react-router-dom"

const AllCraft = () => {
  const crafts = useLoaderData()
  console.log(crafts);

  return (
    <div>AllCraft</div>
  )
}

export default AllCraft