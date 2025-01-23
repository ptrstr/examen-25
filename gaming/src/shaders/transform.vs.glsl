#version 330 core

layout(location = 0) in vec3 position;
layout(location = 1) in vec3 colorIn;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

out vec3 colorOut;

void main() {
  mat4 transform = projection * view * model;
  vec4 position = transform * vec4(position, 1.0) ;
  gl_Position = position;
  colorOut = colorIn;
}
