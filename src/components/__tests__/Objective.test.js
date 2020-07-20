import React from 'react';
import { render } from '@testing-library/react';
import Objective from '../Objective';
import {mount, shallow} from 'enzyme';
let mountedObjective;
beforeEach(()=>{
    mountedObjective = mount(<Objective/>);
})
describe("Objective tests", ()=>{
    it("renders without crashing",()=>{
        shallow(<Objective/>);
    })
    it("has required input", ()=>{
        expect(mountedObjective.find(".objective").length).toBe(1);
        expect(mountedObjective.find(".startdate").length).toBe(1);
        expect(mountedObjective.find(".enddate").length).toBe(1);
        expect(mountedObjective.find(".owner").length).toBe(1);
        expect(mountedObjective.find(".status").length).toBe(1);
        expect(mountedObjective.find(".logo").length).toBe(1);
    })
    it("has required buttons", ()=>{
        expect(mountedObjective.find(".submit").length).toBe(1);
        expect(mountedObjective.find(".reset").length).toBe(1);
    })
    
    it("calls a function passed to it when clicked",()=>{
        const mockCallBack = jest.fn();
        const mountedObjectiveWithCallback = shallow(<Objective handleClick = {mockCallBack}/>);
        mountedObjectiveWithCallback.find(".submit").simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

    it("submits user input when poopulated and submitted",()=>{
        let mountedObjective = shallow(<Objective/>)
        let mockEvent = {target:{value:'submit'}};
        mountedObjective.instance().handleSubmit(mockEvent);
        expect(mountedObjective.instance().state.objective).toBe({})
    })

})