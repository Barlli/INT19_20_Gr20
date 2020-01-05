function checkEmail(e) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e))
  {
    return true;
  }
    return false;
}
