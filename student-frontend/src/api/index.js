import http from '../utils/request'

//请求首页数据
export const getData = () => {
    return http.get('/')
}

export const onSearchSubmit = (term) => {
    console.log(term);
    axios({
      method: 'post',
      url: 'http://localhost:7474/db/data/transaction/commit',
      data: {
        'statements' : [{
          'statement' : 'MATCH (n)-[r]-(m) WHERE n.nme=$term RETURN n,r,m',
          'parameters' : {
            'term' : 'Joe Smith'
          }
        }]
      }
    }).then(function(response){
      console.log(response);
    });
  }






