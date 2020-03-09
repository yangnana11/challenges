using System;

public static class Kata
{
  public static string AddBinary(int a, int b)
  {
     string result = "";
     int sum = a + b;
     while (sum!=0) {
       result=(sum%2).ToString()+result;
       sum=(int)Math.Floor(sum/2*1.0);
     }
     return result;
  }
}