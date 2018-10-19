import React from 'react';
import renderer from 'react-test-renderer';

import Tile from './components/Tile';
import LazyLoader from './components/LazyLoader';

//Snapshot test tile component
describe('Tile Component', () =>{
  it('render correctly', () =>{
    const tree = renderer.create(
      <Tile image="./assets/Slices/poster8.jpeg" title="Text"/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

const loadData = function(){
  return "string";
};

describe('ContentList Component', () =>{
  it('render correctly', () =>{
    const tree = renderer.create(
      <LazyLoader
      hasMore={true}
      isFetching={false}
      loadData={loadData}
      ></LazyLoader>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})

