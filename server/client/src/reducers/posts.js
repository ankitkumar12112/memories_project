export default (posts=[],action)=>{

   switch (action.type) {
case'DELETE':
return posts.filter((post)=>post._id!==action.payload)
case 'LIKE':
      case'UPDATE':
      return posts.map((post)=>post.Id===action.payload._id? action.paylod:post);
       case 'FETCH_ALL':
          return action.payload;
          case'CREATE': 
          return[...posts,action.payload];
       default:
          return posts;
   }
}
