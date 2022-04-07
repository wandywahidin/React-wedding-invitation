import getAllComment from './getAllComment'
import axios from 'axios'

const addComment = (({user} = {}) => {
    return function(dispatch) {
        axios({
            method : 'post',
            url : 'http://localhost:3001/comment',
            data : {
                nama : user.nama,
                ucapan : user.ucapan
            }
        })
        .then(({data}) => {
            console.log('succes add comment',data.nama)
            dispatch(getAllComment())
        }).catch((err) => {
            console.log(err);
        });
    }
})

export default addComment
