import { Fragment, useState } from "react";
import List from "../List";
import SearchInput from "../SearchInput";

const Layout = () => {
    
    const [searchValue, setSearchValue] = useState('')
    return (
        <Fragment>
            <div className="Container">
                <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}></SearchInput>
                <List searchValue={searchValue}></List>
            </div>
        </Fragment>
    )
}
export default Layout;