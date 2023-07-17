import React, { useState } from 'react';

export const Folder = (props) => {

  const selectTab = (num) => {
    setCurrentTab(num);
  }

  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section className="tabs-section">
      <h1>Tabs</h1>
      <div className='tabs'>
        <Headers
          titles={props.folders}
          currentTab={currentTab}
          selectTab={selectTab}
        />
        <div className='tab-content'>
          {props.folders.content}
        </div>
      </div>
    </section>
  )
};
// class Folder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentTab: 0
//     };
//   }
  
//   selectTab = (num) => {
//     this.setState({ currentTab: num });
//   }
  
//   render() {
//     const folder = this.props.folders[this.state.currentTab];
//     const titles = this.props.folders.map((folder) => folder.title);
    
//     return (
//       <section className="tabs-section">
//         <h1>Tabs</h1>
//         <div className='tabs'>
//           <Headers
//             titles={titles}
//             currentTab={this.state.currentTab}
//             selectTab={this.selectTab}
//           />
//           <div className='tab-content'>
//             {folder.content}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

export const Headers = (props) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    props.selectTab(idx);
  }

  const tabs = props.titles.map((folder, idx) => {

    const headerClass = (idx === props.currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {folder.title}
      </li>
    );
  });
  
  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}


export default Folder;