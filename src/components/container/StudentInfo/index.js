import React from 'react';

const StudentInfo = ({ name_user, email, age, classRoom, period, address }) => {
  return (
    <div className="student-info-container" style={styles.container}>
      <div style={styles.data}>
        <div style={styles.item}>
          <strong>Nome:</strong> {name_user}
        </div>
        <div style={styles.separator}></div>
        <div style={styles.item}>
          <strong>Email:</strong> {email}
        </div>
        <div style={styles.separator}></div>
        <div style={styles.item}>
          <strong>Idade:</strong> {age}
        </div>
        <div style={styles.separator}></div>
        <div style={styles.item}>
          <strong>Turma:</strong> {classRoom}
        </div>
        <div style={styles.separator}></div>
        <div style={styles.item}>
          <strong>Período:</strong> {period}
        </div>
        <div style={styles.separator}></div>
        <div style={styles.item}>
          <strong>Endereço:</strong> {address}
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
  },
  separator: {
    height: '10px',
    backgroundColor: '#799B9F',
  },
};

export default StudentInfo;