function headerLists(){
    const list =["Home", "About Us", "Pricing"];
    const headerItems= list.map(link => <li>{link}</li>);
    return(<ul>{headerItems}</ul>);
}
export default headerLists