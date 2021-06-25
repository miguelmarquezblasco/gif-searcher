import {useState} from "react";
import {useLocation} from "wouter";

export default function Searcher() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation('/gif/' + keyword)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input onChange={handleChange}
                           type="text"
                           className="form-control form-control-lg"
                           placeholder="Search GIF. Example: dog"
                    />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit"
                           className="btn btn-lg btn-danger btn-block"
                           value="Search"
                    />
                </div>
            </div>
        </form>
    )
}