import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import { Skills } from "../../Components/Skills/Skills";

describe("Components/Skills Test suite", () => {
  it("Tets to check if component loads successfully", () => {
    const props = {};
    const SkillsComponent = shallow(<Skills {...props} />);
    expect(SkillsComponent.exists()).toBe(true);
  });

  it("Snapshot verification test for Skills Component", () => {
    const SkillsComponent = create(<Skills />).toJSON();
    expect(SkillsComponent).toMatchSnapshot();
  });
});
