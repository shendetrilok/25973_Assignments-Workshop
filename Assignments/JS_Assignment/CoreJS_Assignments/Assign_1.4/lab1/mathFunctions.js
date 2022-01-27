var msg;
msg="<p><code>The script is located in external script file called math.js</code></p>";
function addNumbers(headParam, bodyParam)
{
    document.write(msg);/* display the contents of the variable "msg" */
    /* display the addition of two numbers */
    var result = headParam + bodyParam ;
    document.write("Addition of "+headParam+" and "+bodyParam+" is:"+result);
}
