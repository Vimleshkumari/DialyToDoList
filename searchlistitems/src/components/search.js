import { useEffect, useState } from "react";
import SearchInput from "../pages/searchInput";
import SearchList from "../pages/searchList";

export default function Search() {
    const [searchInput, setSearchInput] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [searchfileterdData, setsearchfileterdData] = useState([])
    const [userList, setUserData] = useState([])

    useEffect(() => {
        try {
            setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then(res => res.json())
                    .then(data => {
                        setUserData(data)
                        setsearchfileterdData(data);
                        setLoading(false)
                    })
                    .catch(err => console.log(err))
            }, 3000)

        }
        catch (err) {
            console.log(err)
        }
        finally {
            console.log("we are doing good to search")
        }

    }, [])

    const handleChange = (e) => {
        setSearchInput(e.target.value)

        if (e.target.value) {
            let resultantlist = userList.filter(ele => ele.name.toLowerCase().includes(e.target.value.toLowerCase()))
            console.log("resultantlist", resultantlist);
            setsearchfileterdData([...resultantlist])
        }
        else {
            console.log("searchfileterdData", searchfileterdData);
            setsearchfileterdData([...userList])
        }
    }



    return <>
        <SearchInput searchInput={searchInput} handleChange={handleChange} />
        {isLoading ? <div >Loading<span className="dots"></span></div> : <SearchList searchfileterdData={searchfileterdData} />}
    </>
}
