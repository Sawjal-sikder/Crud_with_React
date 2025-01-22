import axios from 'axios';
import React, { useState } from 'react';

function Delete(deleterUrl) {
  const dataDelete = async (id) => {
    try {
      const res = await axios.delete(`${deleterUrl}/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { dataDelete };
}
export default Delete;
