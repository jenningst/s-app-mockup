const ICONS = {
  BELL: {
    title: 'Bell',
    viewBox: '0 0 511.999 511.999',
    paths: [
      'M416.617 355.815V213.414c0-37.051-13.317-72.884-37.498-100.895-22.034-25.524-51.76-43.106-84.429-50.127V38.691c.001-10.334-4.025-20.051-11.332-27.358C276.049 4.025 266.333 0 256 0c-21.334 0-38.691 17.357-38.691 38.691v23.701c-32.665 7.02-62.388 24.604-84.42 50.127-24.179 28.012-37.496 63.844-37.496 100.895v142.363c-8.869 3.392-17.01 8.628-23.925 15.543C58.527 384.261 51.4 401.464 51.4 419.76c0 5.544 4.495 10.039 10.039 10.039h153.972c-6.611 8.618-10.552 19.386-10.552 31.06 0 28.199 22.942 51.14 51.14 51.14 28.193 0 51.13-22.942 51.13-51.14 0-11.676-3.94-22.443-10.55-31.06h153.98c5.544 0 10.039-4.496 10.039-10.039.001-29.133-18.288-54.06-43.981-63.945zM237.387 38.691c0-10.263 8.35-18.613 18.613-18.613 4.97 0 9.644 1.937 13.16 5.453a18.488 18.488 0 0 1 5.452 13.159v20.75c-4.135-.33-8.301-.5-12.469-.5h-12.288c-4.165 0-8.332.17-12.469.501v-20.75zM115.471 213.414c0-66.653 47.703-122.49 113.438-132.77a135.2 135.2 0 0 1 20.947-1.625h12.288c7.057 0 14.104.547 20.945 1.624l.012.002c65.731 10.278 113.438 66.116 113.438 132.769v137.849H115.471V213.414zM256 491.922c-17.128 0-31.061-13.934-31.061-31.061 0-17.127 13.933-31.061 31.061-31.061 17.122 0 31.051 13.933 31.051 31.061 0 17.127-13.93 31.061-31.051 31.061zM72.515 409.721c1.909-9.104 6.417-17.469 13.15-24.203 9.142-9.142 21.299-14.177 34.233-14.177h272.203c23.257 0 42.737 16.483 47.372 38.38H72.515z',
      'M208.969 310.212h-75.76c-5.545 0-10.039 4.496-10.039 10.039 0 5.544 4.495 10.039 10.039 10.039h75.76c5.545 0 10.039-4.496 10.039-10.039 0-5.544-4.495-10.039-10.039-10.039zM235.74 310.192c-12.919 0-12.941 20.078 0 20.078 12.92 0 12.941-20.078 0-20.078z',
    ],
  },
  BELLMESSAGE: {
    title: 'Bell Message',
    viewBox: '',
    paths: [
      'M-1-1h582v402H-1z',
      'M416.617 355.815V213.414c0-37.051-13.317-72.884-37.498-100.895-22.034-25.524-51.76-43.106-84.429-50.127V38.691c.001-10.334-4.025-20.051-11.332-27.358C276.049 4.025 266.333 0 256 0c-21.334 0-38.691 17.357-38.691 38.691v23.701c-32.665 7.02-62.388 24.604-84.42 50.127-24.179 28.012-37.496 63.844-37.496 100.895v142.363c-8.869 3.392-17.01 8.628-23.925 15.543C58.527 384.261 51.4 401.464 51.4 419.76c0 5.544 4.495 10.039 10.039 10.039h153.972c-6.611 8.618-10.552 19.386-10.552 31.06 0 28.199 22.942 51.14 51.14 51.14 28.193 0 51.13-22.942 51.13-51.14 0-11.676-3.94-22.443-10.55-31.06h153.98c5.544 0 10.039-4.496 10.039-10.039.001-29.133-18.288-54.06-43.981-63.945zM237.387 38.691c0-10.263 8.35-18.613 18.613-18.613 4.97 0 9.644 1.937 13.16 5.453a18.488 18.488 0 0 1 5.452 13.159v20.75c-4.135-.33-8.301-.5-12.469-.5h-12.288c-4.165 0-8.332.17-12.469.501v-20.75h.001zM115.471 213.414c0-66.653 47.703-122.49 113.438-132.77a135.2 135.2 0 0 1 20.947-1.625h12.288c7.057 0 14.104.547 20.945 1.624l.012.002c65.731 10.278 113.438 66.116 113.438 132.769v137.849H115.471V213.414zM256 491.922c-17.128 0-31.061-13.934-31.061-31.061 0-17.127 13.933-31.061 31.061-31.061 17.122 0 31.051 13.933 31.051 31.061 0 17.127-13.93 31.061-31.051 31.061zM72.515 409.721c1.909-9.104 6.417-17.469 13.15-24.203 9.142-9.142 21.299-14.177 34.233-14.177h272.203c23.257 0 42.737 16.483 47.372 38.38H72.515z',
      'M208.969 310.212h-75.76c-5.545 0-10.039 4.496-10.039 10.039 0 5.544 4.495 10.039 10.039 10.039h75.76c5.545 0 10.039-4.496 10.039-10.039 0-5.544-4.495-10.039-10.039-10.039zm26.771-.02c-12.919 0-12.941 20.078 0 20.078 12.92 0 12.941-20.078 0-20.078z',
    ],
    decor: '<ellipse ry="89.5" rx="89.5" cy="151.937" cx="397" fill-opacity="null" fill="#0182fe"/>',
  },
  USER: {
    title: 'User Icon',
    viewBox: '0 0 512 512',
    paths: [
      'M131.069 192.99c-1.859-1.86-4.439-2.931-7.069-2.931s-5.21 1.07-7.07 2.931a10.095 10.095 0 0 0-2.93 7.079c0 2.631 1.069 5.2 2.93 7.07 1.86 1.861 4.44 2.93 7.07 2.93s5.21-1.069 7.069-2.93a10.073 10.073 0 0 0 2.931-7.07c0-2.64-1.07-5.22-2.931-7.079z',
      'M365.877 322.468C384.763 314.216 398 295.365 398 273.473V142C398 63.701 334.299 0 256 0S114 63.701 114 142v15c0 5.522 4.478 10 10 10s10-4.478 10-10v-15c0-67.271 54.729-122 122-122s122 54.729 122 122v131.473c0 18.442-15.004 33.447-33.447 33.447h-41.026c.304-2.18.473-4.402.473-6.664v-26.47c0-.153-.016-.302-.023-.454C332.662 256.712 352 225.676 352 190.206v-34.281c0-23.159-18.841-42-42-42H202c-23.159 0-42 18.841-42 42v34.281c0 35.47 19.338 66.506 48.023 83.126-.007.151-.023.301-.023.454v26.47c0 2.262.169 4.484.473 6.664h-41.026c-18.443 0-33.447-15.004-33.447-33.447V240c0-5.522-4.478-10-10-10s-10 4.478-10 10v33.473c0 21.893 13.237 40.744 32.123 48.996C89.401 348.975 50 406.568 50 473.199V502c0 5.522 4.478 10 10 10h392c5.522 0 10-4.478 10-10v-28.801c0-66.631-39.401-124.224-96.123-150.731zM180 190.206v-34.281c0-12.131 9.869-22 22-22h108c12.131 0 22 9.869 22 22v34.281c0 41.906-34.094 76-76 76s-76-34.094-76-76zm104 91.831v18.219c0 15.439-12.561 28-28 28s-28-12.561-28-28v-18.219c8.862 2.707 18.263 4.169 28 4.169s19.138-1.462 28-4.169zm-67.889 44.885c8.621 12.854 23.282 21.334 39.889 21.334s31.268-8.479 39.889-21.334c9.671.011 19.122.972 28.272 2.782L256 447.763l-68.161-118.058a146.35 146.35 0 0 1 28.272-2.783zM442 492h-40.308v-35c0-5.522-4.478-10-10-10s-10 4.478-10 10v35H130.308v-64.442c0-5.522-4.478-10-10-10s-10 4.478-10 10V492H70v-18.801c0-63.707 40.942-118.023 97.892-138.044l79.448 137.607a10 10 0 0 0 17.32 0l79.448-137.607C401.058 355.176 442 409.492 442 473.199V492z',
      'M226.939 180.73c-1.859-1.86-4.439-2.93-7.069-2.93s-5.2 1.07-7.07 2.93a10.05 10.05 0 0 0-2.92 7.07c0 2.63 1.06 5.21 2.92 7.07a10.098 10.098 0 0 0 7.07 2.93c2.64 0 5.21-1.07 7.069-2.93 1.87-1.86 2.94-4.44 2.94-7.07s-1.07-5.21-2.94-7.07zM299.45 180.73c-1.86-1.859-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93c-1.859 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.07c1.86 1.859 4.44 2.93 7.07 2.93s5.21-1.07 7.07-2.93c1.859-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07zM270.744 217.749c-3.906-3.904-10.236-3.904-14.143 0a2.615 2.615 0 0 1-3.693 0c-3.905-3.906-10.238-3.905-14.142.001-3.905 3.905-3.904 10.237.001 14.142 4.408 4.408 10.198 6.611 15.988 6.611 5.79 0 11.58-2.204 15.988-6.611 3.906-3.906 3.906-10.238.001-14.143zM398.759 410.491a10.053 10.053 0 0 0-7.07-2.931c-2.63 0-5.21 1.07-7.069 2.931a10.057 10.057 0 0 0-2.931 7.069c0 2.63 1.07 5.21 2.931 7.07 1.87 1.86 4.439 2.93 7.069 2.93s5.21-1.069 7.07-2.93c1.86-1.861 2.93-4.44 2.93-7.07s-1.069-5.21-2.93-7.069z',
    ],
  },
  DOWNARROW: {
    title: 'Down Arrow',
    viewBox: '0 0 59.414 59.414',
    paths: [
      'M58 14.146L29.707 42.439 1.414 14.146 0 15.561l29.707 29.707 29.707-29.707z',
    ],
  },
  MAGNIFYINGGLASS: {
    title: 'Magnifying Glass',
    viewBox: '0 1 511 511.999',
    paths: [
      'M111.582 283.613c-3.875-3.933-10.21-3.98-14.144-.101-3.934 3.875-3.977 10.207-.102 14.14l.762.77a9.973 9.973 0 0 0 7.066 2.922 9.97 9.97 0 0 0 7.078-2.938c3.903-3.91 3.895-10.242-.015-14.144zm0 0',
      'M298.914 97.594c-55.367-55.367-145.453-55.367-200.82 0-43.64 43.64-54.16 109.883-26.176 164.84 2.508 4.921 8.527 6.878 13.453 4.375 4.922-2.508 6.879-8.528 4.371-13.45-24.043-47.214-15-104.129 22.496-141.625 47.567-47.566 124.969-47.566 172.535 0 47.57 47.57 47.57 124.97 0 172.54-36.09 36.09-91.425 45.898-137.691 24.406-5.008-2.328-10.957-.153-13.281 4.855-2.328 5.008-.153 10.957 4.855 13.281 19.031 8.84 39.371 13.133 59.586 13.133 36.98-.004 73.516-14.375 100.676-41.535 55.363-55.367 55.363-145.453-.004-200.82zm0 0',
      'M503.719 439.148l-136.93-136.93c18.824-30.292 29.719-66.003 29.719-104.214C396.508 88.824 307.684 0 198.504 0 89.324 0 .5 88.824.5 198.004c0 109.18 88.824 198.004 198.004 198.004 38.207 0 73.914-10.89 104.203-29.711l136.934 136.93c5.847 5.847 13.53 8.773 21.21 8.773 7.684 0 15.368-2.926 21.215-8.773l21.653-21.653c11.699-11.695 11.699-30.726 0-42.426zM20.5 198.004C20.5 99.852 100.352 20 198.504 20s178.004 79.852 178.004 178.004-79.852 178.004-178.004 178.004S20.5 296.156 20.5 198.004zm334.695 120.902l22.133 22.137-35.793 35.793-22.137-22.137a199.678 199.678 0 0 0 35.797-35.793zm134.383 148.528l-21.652 21.648c-3.899 3.902-10.242 3.902-14.14 0L355.68 390.98l35.793-35.796 98.105 98.105c3.899 3.902 3.899 10.246 0 14.145zm0 0',
      'M268.504 198.004c0 5.523 4.48 10 10.004 10 5.52 0 10-4.477 10-10 0-34.36-20.016-66.203-50.985-81.125-4.976-2.399-10.953-.305-13.351 4.668-2.395 4.976-.305 10.953 4.672 13.351 24.093 11.606 39.66 36.375 39.66 63.106zm0 0M198.66 128.004c5.524 0 10-4.477 10-10 0-5.524-4.476-10-10-10h-.156c-5.524 0-10 4.476-10 10 0 5.523 4.476 10 10 10zm0 0',
    ],
  },
  HOME: {
    title: 'Home',
    viewBox: '0 0 512.002 512.002',
    paths: [
      'M502.001 492.002h-44v-79c0-5.523-4.478-10-10-10s-10 4.477-10 10v79h-120v-190c0-5.523-4.478-10-10-10h-104c-5.522 0-10 4.477-10 10v190h-120V266.001h3.848c2.652 0 5.195-1.054 7.071-2.929L256.001 91.991l171.081 171.081a10.003 10.003 0 0 0 7.071 2.929h3.848v75c0 5.523 4.478 10 10 10s10-4.477 10-10v-75h44a10.001 10.001 0 0 0 7.071-17.071l-246-246c-3.906-3.905-10.236-3.905-14.143 0l-94 94c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.238 3.906 14.143 0l86.929-86.929 221.857 221.858h-39.563L263.072 70.778c-3.906-3.905-10.236-3.905-14.143 0L73.706 246.001H34.143l78.929-78.928c3.905-3.905 3.905-10.237 0-14.143-3.905-3.904-10.237-3.905-14.143 0l-96 96a10.002 10.002 0 0 0 7.072 17.071h44v226h-44c-5.522 0-10 4.477-10 10s4.478 10 10 10h492c5.522 0 10-4.477 10-10s-4.478-9.999-10-9.999zm-204 0h-84v-180h84v180z',
      'M406.001 292.002h-56c-5.522 0-10 4.477-10 10v100c0 5.523 4.478 10 10 10h56c5.522 0 10-4.477 10-10v-100c0-5.523-4.478-10-10-10zm-10 100h-36v-80h36v80zM162.001 292.002h-56c-5.522 0-10 4.477-10 10v100c0 5.523 4.478 10 10 10h56c5.522 0 10-4.477 10-10v-100c0-5.523-4.478-10-10-10zm-10 100h-36v-80h36v80zM256.001 164.322c-25.364 0-46 20.636-46 46s20.636 46 46 46 46-20.636 46-46-20.636-46-46-46zm0 72c-14.337 0-26-11.664-26-26s11.663-26 26-26 26 11.664 26 26-11.663 26-26 26zM244.07 394.932a10.073 10.073 0 0 0-7.069-2.93c-2.63 0-5.21 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07c1.861 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM140.07 125.932c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21 1.07-7.07 2.93c-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07c1.861 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM455.07 367.261a10.078 10.078 0 0 0-7.069-2.93c-2.63 0-5.21 1.07-7.07 2.93-1.86 1.87-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.08c1.86 1.86 4.44 2.92 7.07 2.92s5.21-1.06 7.069-2.92a10.1 10.1 0 0 0 2.931-7.08c0-2.63-1.07-5.21-2.931-7.07z',
    ],
  },
  TASKS: {
    title: 'Tasks',
    viewBox: '0 0 511.998 511.998',
    paths: [
      'M175.929 40.087c-5.518 0-9.996 4.478-9.996 9.996s4.478 9.996 9.996 9.996 9.996-4.478 9.996-9.996-4.479-9.996-9.996-9.996zM52.978 226.011c-5.518 0-9.996 4.478-9.996 9.996s4.478 9.996 9.996 9.996 9.996-4.478 9.996-9.996-4.478-9.996-9.996-9.996zM163.005 168.962c-3.903-3.903-10.233-3.903-14.137 0l-32.915 32.917-12.924-12.924c-3.903-3.903-10.233-3.903-14.137 0-3.903 3.903-3.903 10.233 0 14.137l19.993 19.991a9.964 9.964 0 0 0 7.068 2.928 9.963 9.963 0 0 0 7.068-2.928l39.984-39.984c3.903-3.903 3.903-10.232 0-14.137zM163.005 268.922c-3.903-3.903-10.233-3.903-14.137 0l-32.915 32.917-12.924-12.924c-3.903-3.903-10.233-3.903-14.137 0-3.903 3.903-3.903 10.233 0 14.137l19.993 19.991a9.964 9.964 0 0 0 7.068 2.928 9.963 9.963 0 0 0 7.068-2.928l39.984-39.984c3.903-3.903 3.903-10.233 0-14.137zM163.005 368.881c-3.903-3.903-10.233-3.903-14.137 0l-32.915 32.917-12.924-12.924c-3.903-3.903-10.233-3.903-14.137 0-3.903 3.903-3.903 10.233 0 14.137l19.993 19.991a9.964 9.964 0 0 0 7.068 2.928 9.963 9.963 0 0 0 7.068-2.928l39.984-39.984c3.903-3.903 3.903-10.232 0-14.137zM255.896 186.027H195.92c-5.521 0-9.996 4.475-9.996 9.996s4.475 9.996 9.996 9.996h59.976c5.521 0 9.996-4.475 9.996-9.996s-4.475-9.996-9.996-9.996z',
      'M511.998 131.701c0-8.009-3.119-15.539-8.783-21.202l-14.127-14.131c-5.665-5.672-13.198-8.795-21.212-8.795-8.015 0-15.548 3.124-21.207 8.79l-28.216 28.216-66.595 64.491v-79.01c0-17.673-17.385-29.988-32.987-29.988h-54.698c-4.126-11.634-15.237-19.992-28.268-19.992h-11.042a48.025 48.025 0 0 0 1.046-9.996c0-27.559-22.421-49.98-49.98-49.98s-49.98 22.421-49.98 49.98c0 3.382.35 6.718 1.046 9.996h-11.042c-13.031 0-24.142 8.358-28.268 19.992H29.988C13.453 80.07 0 93.523 0 110.058v371.849c0 16.535 13.453 29.988 29.988 29.988H318.87c15.602 0 32.987-12.315 32.987-29.988V300.376l91.749-88.845a9.985 9.985 0 0 0 3.064-2.082 9.952 9.952 0 0 0 1.945-2.768l19.152-18.545 7.179 7.179a9.927 9.927 0 0 1 2.927 7.065 9.926 9.926 0 0 1-2.928 7.066l-56.547 56.547c-3.903 3.903-3.903 10.233 0 14.137 1.952 1.951 4.51 2.928 7.068 2.928s5.117-.977 7.068-2.928l56.547-56.547c5.664-5.664 8.782-13.194 8.782-21.202 0-8.009-3.12-15.539-8.782-21.202l-7.067-7.067 21.201-21.208c5.664-5.666 8.783-13.195 8.783-21.203zm-246.106-31.639h52.979c6.193 0 12.995 5.231 12.995 9.996v98.37l-22.991 22.264v-97.643c0-5.521-4.475-9.996-9.996-9.996h-32.987v-22.991zm-159.935-9.996c0-5.512 4.484-9.996 9.996-9.996h25.55a9.995 9.995 0 0 0 8.639-15.024c-2.788-4.79-4.201-9.824-4.201-14.964 0-16.535 13.453-29.988 29.988-29.988s29.988 13.453 29.988 29.988c0 5.14-1.413 10.174-4.201 14.964a9.996 9.996 0 0 0 8.639 15.024h25.55c5.512 0 9.996 4.484 9.996 9.996v32.987H105.957V90.066zm225.908 391.841c0 4.765-6.801 9.996-12.995 9.996H29.988c-5.512 0-9.996-4.484-9.996-9.996V110.058c0-5.512 4.484-9.996 9.996-9.996h55.977v22.991H52.978c-5.521 0-9.996 4.475-9.996 9.996v62.974c0 5.521 4.475 9.996 9.996 9.996s9.996-4.475 9.996-9.996v-52.978h225.908v107.008l-37.107 35.934H195.92c-5.521 0-9.996 4.475-9.996 9.996s4.475 9.996 9.996 9.996h35.212l-2.392 2.316a9.924 9.924 0 0 0-.579.621c-.03.035-.065.066-.095.102-.257.303-.489.619-.705.944-.044.066-.082.136-.125.203a10.01 10.01 0 0 0-.974 2.024c-.015.044-.037.084-.052.128l-.047.142-.009.028-20.398 61.204-12.466 12.465c-3.903 3.903-3.904 10.233 0 14.136a9.964 9.964 0 0 0 7.068 2.928 9.967 9.967 0 0 0 7.068-2.928l12.467-12.466 61.376-20.466c.048-.016.091-.04.139-.056.312-.109.619-.234.921-.375.063-.029.127-.055.189-.086a9.891 9.891 0 0 0 1.039-.587c.027-.017.051-.038.078-.056a9.9 9.9 0 0 0 .835-.624c.095-.079.186-.162.279-.244.104-.093.212-.177.313-.275l3.822-3.701v87.563H62.974v-172.93c0-5.521-4.475-9.996-9.996-9.996s-9.996 4.475-9.996 9.996v182.926c0 5.521 4.475 9.996 9.996 9.996h245.9c5.521 0 9.996-4.475 9.996-9.996V341.998l22.991-22.263v162.172zm-91.801-147.931l19.539 19.534-29.306 9.771 9.767-29.305zm38.155 9.878l-28.274-28.267 146.686-142.049 28.269 28.276-146.681 142.04zm161.047-155.947l-28.271-28.276 14.36-13.906L453.63 174l-14.364 13.907zm49.813-49.14l-21.2 21.207-28.276-28.276 21.204-21.204a9.919 9.919 0 0 1 7.066-2.931 9.923 9.923 0 0 1 7.071 2.936l14.134 14.134a9.926 9.926 0 0 1 2.928 7.066 9.926 9.926 0 0 1-2.927 7.068z',
    ],
  },
  ACHIEVEMENTS: {
    title: 'Achievements',
    viewBox: '-46 0 512 512',
    paths: [
      'M170 412c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10zm0 0',
      'M0 70c0 78.145 53.188 145.414 127.355 164.605a227.03 227.03 0 0 0 32.649 34.254c6.351 5.399 9.996 13.856 9.996 23.2V352h-20c-16.543 0-30 13.457-30 30v70h-10c-16.543 0-30 13.457-30 30v20c0 5.523 4.477 10 10 10h240c5.52 0 10-4.477 10-10v-20c0-16.543-13.46-30-30-30h-10v-70c0-16.543-13.46-30-30-30h-20v-59.941c0-9.344 3.64-17.801 9.996-23.2a227.223 227.223 0 0 0 32.649-34.254C366.809 215.415 420 148.148 420 70V50c0-16.543-13.457-30-30-30h-50V10c0-5.523-4.477-10-10-10H90c-5.523 0-10 4.477-10 10v10H30C13.457 20 0 33.457 0 50zm310 402c5.516 0 10 4.484 10 10v10H100v-10c0-5.516 4.484-10 10-10zm-40-100c5.516 0 10 4.484 10 10v70H140v-70c0-5.516 4.484-10 10-10zm70-276.16V40h50c5.516 0 10 4.484 10 10v20c0 60.52-35.543 113.617-89.152 137.21C329.988 173.337 340 135.349 340 95.84zM100 20h220v75.84c0 45.008-14.234 87.855-41.164 123.918a206.956 206.956 0 0 1-31.793 33.86C236.211 262.823 230 276.835 230 292.057V352h-40v-59.941c0-15.223-6.21-29.235-17.043-38.438a207.139 207.139 0 0 1-31.793-33.863C114.234 183.695 100 140.848 100 95.84zM20 50c0-5.516 4.484-10 10-10h50v55.84c0 39.508 10.012 77.5 29.152 111.37C55.547 183.618 20 130.52 20 70zm0 0',
      'M210 412h40c5.523 0 10-4.477 10-10s-4.477-10-10-10h-40c-5.523 0-10 4.477-10 10s4.477 10 10 10zm0 0M173.613 123.98l-4.988 29.098a10.002 10.002 0 0 0 3.977 9.781 9.993 9.993 0 0 0 10.53.762l26.145-13.734 26.141 13.734c3.371 1.774 7.453 1.477 10.531-.762s4.621-6.03 3.977-9.78l-4.988-29.099 21.144-20.62a10 10 0 0 0-5.543-17.055l-29.226-4.246-13.063-26.485a10.002 10.002 0 0 0-17.937 0L187.238 82.06l-29.226 4.246a9.994 9.994 0 0 0-8.07 6.804 9.987 9.987 0 0 0 2.527 10.25zm21.703-22.882a10.009 10.009 0 0 0 7.532-5.473l6.43-13.027 6.421 13.027a10.009 10.009 0 0 0 7.531 5.473l14.383 2.086-10.402 10.144a9.991 9.991 0 0 0-2.875 8.852l2.453 14.312-12.855-6.754a9.998 9.998 0 0 0-9.305 0l-12.867 6.758 2.457-14.316c.554-3.243-.52-6.551-2.875-8.852l-10.406-10.144zm0 0',
    ],
  },
  SOCIAL: {
    title: 'Social',
    viewBox: '0 0 512 512',
    paths: [
      'M126 186c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM406 40c-5.522 0-10 4.477-10 10s4.478 10 10 10c16.542 0 30 13.458 30 30 0 5.523 4.478 10 10 10s10-4.477 10-10c0-27.57-22.43-50-50-50zM406 372c-5.522 0-10 4.477-10 10s4.478 10 10 10c16.542 0 30 13.458 30 30 0 5.523 4.478 10 10 10s10-4.477 10-10c0-27.57-22.43-50-50-50z',
      'M406 332c-28.717 0-55.637 13.832-72.483 36.666l-107.576-66.69a110.114 110.114 0 0 0 0-91.953l107.576-66.689C350.362 166.168 377.283 180 406 180c49.626 0 90-40.374 90-90S455.626 0 406 0s-90 40.374-90 90a90.177 90.177 0 0 0 7.511 36.005L215.95 192.686C195.472 163.661 161.884 146 126 146c-60.654 0-110 49.346-110 110s49.346 110 110 110c35.886 0 69.476-17.661 89.95-46.686l107.561 66.681A90.16 90.16 0 0 0 316 422c0 49.626 40.374 90 90 90s90-40.374 90-90-40.374-90-90-90zm0-312c38.598 0 70 31.402 70 70s-31.402 70-70 70c-25.039 0-48.333-13.515-60.792-35.269C339.185 114.211 336 102.202 336 90c0-38.598 31.402-70 70-70zM204.161 300.652C188.15 328.624 158.2 346 126 346c-49.626 0-90-40.374-90-90s40.374-90 90-90c32.2 0 62.15 17.376 78.161 45.348l.003.005C211.907 224.862 216 240.301 216 256c0 15.699-4.093 31.138-11.839 44.652zM406 492c-38.598 0-70-31.402-70-70 0-12.202 3.185-24.211 9.208-34.73C357.667 365.515 380.961 352 406 352c38.598 0 70 31.402 70 70s-31.402 70-70 70z',
      'M170.005 201.59c-4.291-3.476-10.587-2.816-14.064 1.475s-2.816 10.588 1.475 14.065C169.226 226.699 176 240.867 176 256c0 27.57-22.43 50-50 50-5.522 0-10 4.477-10 10s4.478 10 10 10c38.598 0 70-31.402 70-70 0-21.194-9.475-41.026-25.995-54.41z',
    ],
  },
  MENU: {
    title: 'Menu',
    viewBox: '0 0 502 502',
    paths: [
      'M445.317 143.126H56.683C25.428 143.126 0 117.698 0 86.443S25.428 29.76 56.683 29.76h388.635C476.572 29.76 502 55.188 502 86.443s-25.428 56.683-56.683 56.683zM56.683 49.76C36.456 49.76 20 66.216 20 86.443s16.456 36.683 36.683 36.683h388.635c20.227 0 36.683-16.456 36.683-36.683S465.544 49.76 445.317 49.76H56.683zM445.317 307.683H56.683C25.428 307.683 0 282.255 0 251s25.428-56.683 56.683-56.683h388.635C476.572 194.317 502 219.745 502 251s-25.428 56.683-56.683 56.683zM56.683 214.317C36.456 214.317 20 230.773 20 251s16.456 36.683 36.683 36.683h388.635C465.544 287.683 482 271.227 482 251s-16.456-36.683-36.683-36.683H56.683zM445.317 472.24H56.683C25.428 472.24 0 446.812 0 415.557s25.428-56.683 56.683-56.683h388.635c31.255 0 56.683 25.428 56.683 56.683-.001 31.255-25.429 56.683-56.684 56.683zM56.683 378.874C36.456 378.874 20 395.33 20 415.557s16.456 36.683 36.683 36.683h388.635c20.227 0 36.683-16.456 36.683-36.683s-16.456-36.683-36.683-36.683H56.683z',
      'M230.576 87.106H57.85c-5.523 0-10-4.477-10-10s4.477-10 10-10h172.726c5.523 0 10 4.477 10 10s-4.477 10-10 10zM297.099 87.106h-19.84c-5.523 0-10-4.477-10-10s4.477-10 10-10h19.84c5.523 0 10 4.477 10 10s-4.477 10-10 10z',
    ],
  },
  CLOSE: {
    title: 'Close',
    viewBox: '0 0 512 512',
    paths: [
      'M491.375 157.662c-13.149-30.297-31.855-57.697-55.598-81.439-23.742-23.742-51.142-42.448-81.439-55.598C322.809 6.939 289.723 0 256 0s-66.809 6.939-98.338 20.625c-30.297 13.15-57.697 31.856-81.439 55.598-23.742 23.742-42.448 51.142-55.598 81.439C6.939 189.191 0 222.277 0 256s6.939 66.809 20.625 98.338c13.15 30.297 31.856 57.697 55.598 81.439s51.142 42.448 81.439 55.598C189.191 505.061 222.277 512 256 512s66.809-6.939 98.338-20.625c30.297-13.15 57.697-31.856 81.439-55.598s42.448-51.142 55.598-81.439C505.061 322.809 512 289.723 512 256s-6.939-66.809-20.625-98.338zM256 492C128.075 492 20 383.925 20 256S128.075 20 256 20s236 108.075 236 236-108.075 236-236 236z',
      'M451.975 173.804c-10.87-25.256-26.363-48.044-46.049-67.729-19.686-19.687-42.473-35.179-67.73-46.05C311.948 48.728 284.293 43 256 43c-38.462 0-78.555 13.134-115.945 37.981-4.6 3.057-5.851 9.264-2.794 13.863 3.057 4.6 9.265 5.85 13.863 2.794C185.224 74.978 221.489 63 256 63c104.617 0 193 88.383 193 193s-88.383 193-193 193S63 360.617 63 256c0-34.504 11.975-70.771 34.629-104.877 3.056-4.601 1.804-10.807-2.796-13.863-4.602-3.056-10.808-1.803-13.863 2.797C56.13 177.454 43 217.546 43 256c0 28.293 5.728 55.948 17.025 82.196 10.87 25.256 26.363 48.044 46.049 67.729 19.686 19.686 42.473 35.179 67.729 46.049C200.052 463.272 227.707 469 256 469s55.948-5.728 82.196-17.025c25.256-10.87 48.044-26.363 67.729-46.049 19.686-19.686 35.179-42.473 46.049-67.729C463.272 311.948 469 284.293 469 256s-5.728-55.948-17.025-82.196z',
      'M312.562 256l41.716-41.716C361.837 206.731 366 196.687 366 186s-4.163-20.731-11.719-28.281C346.724 150.162 336.681 146 326 146c-10.681 0-20.724 4.162-28.281 11.719L256 199.438l-41.719-41.719C206.724 150.162 196.681 146 186 146c-10.681 0-20.724 4.162-28.278 11.716C150.163 165.269 146 175.313 146 186s4.163 20.731 11.719 28.281L199.438 256l-41.716 41.716C150.163 305.269 146 315.313 146 326s4.163 20.731 11.719 28.281C165.276 361.838 175.32 366 186 366s20.724-4.162 28.281-11.719L256 312.562l41.719 41.719C305.276 361.838 315.32 366 326 366s20.724-4.162 28.278-11.716C361.837 346.731 366 336.687 366 326s-4.163-20.731-11.719-28.281L312.562 256zm27.577 84.139C336.359 343.918 331.338 346 326 346s-10.359-2.082-14.139-5.861l-48.79-48.79c-1.953-1.953-4.512-2.929-7.071-2.929s-5.119.976-7.071 2.929l-48.79 48.79C196.359 343.918 191.338 346 186 346s-10.359-2.082-14.142-5.864C168.081 336.361 166 331.341 166 326s2.081-10.361 5.861-14.139l48.79-48.79c3.905-3.905 3.905-10.237 0-14.142l-48.793-48.793C168.081 196.361 166 191.341 166 186s2.081-10.361 5.861-14.139c3.78-3.779 8.801-5.861 14.139-5.861s10.359 2.082 14.139 5.861l48.79 48.79c3.905 3.905 10.237 3.905 14.143 0l48.79-48.791c3.779-3.778 8.8-5.86 14.138-5.86s10.359 2.082 14.142 5.864C343.919 175.639 346 180.659 346 186s-2.081 10.361-5.861 14.139l-48.79 48.791c-3.905 3.905-3.905 10.237 0 14.142l48.793 48.793C343.919 315.639 346 320.659 346 326s-2.081 10.361-5.861 14.139zM114 105c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z',
    ],
  },
};

export default ICONS;