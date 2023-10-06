import React from 'react';

const ProjectInfo = ({ text_description }) => {
  return (
    <div className="student-info-container" style={styles.container}>
      <div style={styles.data}>
        <div style={styles.item}>
          {text_description}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#799B9F',
    color: 'black',
    padding: '20px',
    borderRadius: '10px',
  },
  data: {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  item: {
    padding: '10px 0',
    textAlign: 'center',
  },
  separator: {
    height: '10px',
    backgroundColor: '#799B9F',
  },
};

export default ProjectInfo;