document.getElementById('generate').addEventListener('click', function() {
  	const title = document.getElementById('title').value;
    	const heading = document.getElementById('heading').value;
      	const paragraph = document.getElementById('paragraph').value;

        	const html = `
          <!DOCTYPE html>
          <html>
          <head>
          	<title>${title}</title>
            </head>
            <body>
            	<h1>${heading}</h1>
              	<p>${paragraph}</p>
                </body>
                </html>
                `;

                	document.getElementById('output').textContent = html;
                  });