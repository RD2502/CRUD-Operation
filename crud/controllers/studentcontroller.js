import studentmodel from "../models/student.js";
class StudentController{
    static getalldoc= async(req,res) =>{
        try {
            const result=await studentmodel.find();
            res.render('index.ejs',{data:result});
        } catch (error) {
            console.log(error);
        }
    }
    static createdoc=async (req,res) =>{
        try {
            const{name,age,fees}=req.body
            const doc=new studentmodel({
                name:name,
                age:age,
                fees:fees
            })
            const result=await doc.save()
            res.redirect('/')

        } catch (error) {
            console.log(error)
        }
        
    }
    static editdoc=async(req,res) =>{
        try {
            const result=await studentmodel.findById(req.params.id)
            res.render('edit.ejs',{data:result});

        } catch (error) {
            console.log(error);
        }
        
    };
    static updatedocById=async(req,res) =>{
        try {
            const result=await studentmodel.findByIdAndUpdate(req.params.id,req.body)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/');
    };
    static deletedocById=async(req,res) =>{
        try {
            await studentmodel.findByIdAndDelete(req.params.id,req.body);
        } catch (error) {
            
        }
        res.redirect('/');
    };

}



export default StudentController