import React, { useState, useEffect } from 'react';
import axios from 'axios';

const conection = axios.create({
  baseURL: "http://localhost:3001/user/1",
});

export default conection;
