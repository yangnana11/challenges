using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        int vowelCount = 0;

        foreach(char c in str) {
          if(c=='a' || c=='e' || c=='o' || c=='u' || c=='i') vowelCount++;
        }

        return vowelCount;
    }
}
