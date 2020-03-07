{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 using System;\
\
public class Kata\
\{\
  public static int CountBits(int n)\
  \{\
    int quote = n;\
    int count=0;\
    while (quote !=0) \{\
      if (quote%2!=0) count++;\
      quote = Convert.ToInt32(Math.Floor(quote/2*1.0));\
    \}\
    return count;\
  \}\
\}}