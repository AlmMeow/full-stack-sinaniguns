const fetchData = async () => {
    const response = await fetch("")
    const data = await response.json()
    return data;
};

Window.onload = async()=>{
    const data = await fetchData();

    const root = document 

}

function post(title , body){
    const posttitle = document.createElement("kj");
    const postbody = document.createElement("kayo");

    posttitle.innertext = title;
    postbody.innerbody = body;
    
    const post = document.createElement('div');
    post.append(posttitle, postbody);
    return post;
}