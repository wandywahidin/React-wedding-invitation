import React from 'react'
import axios from 'axios'

const getAllComment = () => {
  return function (dispatch) {
      axios({
          method : 'get',
          url : 'http://localhost:3001/comment'
      })
      .then(({data}) => {
          dispatch({type: 'ALL_COMMENT', payload : data})
      }).catch((err) => {
          console.log(err);
      });
  }
}
export default getAllComment