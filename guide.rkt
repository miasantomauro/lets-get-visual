#lang forge

/*
  Sample Data for Custom Visualization Guide
  (https://docs.google.com/document/d/1CGvhezOA6BD7OMtoFPKf1Ao_meDOZiOX47OKu6Y8CjA/edit?usp=sharing)

  Mia Santomauro Spring 2021 ISP with Tim Nelson
*/

sig Shape {
  next: lone Shape,
  color: one Color
}

abstract sig Color {}

one sig Red extends Color {}
one sig Green extends Color {}
one sig Blue extends Color {}

pred rules {

}

run rules for exactly 5 Shape, exactly 3 Color for {next is linear}
