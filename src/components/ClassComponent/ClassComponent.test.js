import Users from "./ClassComponent";
import renderer from "react-test-renderer";

test("class Component method testing", () => {
    const componentData = renderer.create(<Users />).getInstance();
    // console.log(componentData);
    expect(componentData.getUserList()).toMatch('user list')
    let a = "John"
    expect(componentData.getUser(a)).toMatch(a + "extra")
})
