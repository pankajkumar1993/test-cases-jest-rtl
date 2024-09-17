import { render, screen } from "@testing-library/react";
import Users from "./Users.js"

describe("testing api", () => {
  it("checking users api", async () => {
    render(<Users />)
    const listItems = await screen.findAllByRole('listitem');
    // expect(listItems).toHaveLength(4);

    for (let i = 0; i < listItems.length; i++) {
      expect(listItems[i]).toBeInTheDocument()
    }
  })
})