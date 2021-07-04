import React from 'react';
import { mount } from 'enzyme'; 
import moxios from 'moxios';
import App from 'components/App';
import Root from "Root";

beforeEach(() => {
  // This will make moxios intercept axios requests
  moxios.install();
  // Respond with some data
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response:[{name: "Fetched #1"}, {name: "Fetched #2"}]
  })
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  // attempt to render entire app
  const wrapped = mount(<Root><App /></Root>);
  // find the fetch comments and click it
  wrapped.find(".fetch-comments").simulate("click");
  // expect to find a list of comments
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toBe(2);
    done();
    wrapped.unmount();
  })
});