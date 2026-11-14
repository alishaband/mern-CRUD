

 app.post("/",async(req,resp)=>{
    try {
        const {name,salary,dept} = req.body;
        const result = await empmodel({name,salary,dept});
        resp.json(result);
    
    } catch (error) {
       console.log("error");
    }
 });


 app.patch("/update/:id",async(req,resp)=>{
    try{
        const result = await empmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        resp.json(result);
    } catch (error) {
        console.log("error");
    }
 });
