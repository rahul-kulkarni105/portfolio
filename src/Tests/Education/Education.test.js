import React from "react";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import { Education } from "../../Components/Education";

describe("Components/Education Test suite", () => {
  it("Tets to check if component loads successfully", () => {
    const props = {};
    const EducationComponent = shallow(<Education {...props} />);
    expect(EducationComponent.exists()).toBe(true);
  });

  it("Snapshot verification test for Education Component", () => {
    const EducationComponent = create(<Education />).toJSON();
    expect(EducationComponent).toMatchSnapshot();
  });
});
