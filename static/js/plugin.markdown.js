(function(pxui){
	pxui.define("plugin::markdown", function( module ) {
		
        "use strict";
        
    

        var tokenizer = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(?:^```(.*)\n([\s\S]*?)\n```$)|(\n\n*|\n{2,}|__|\*\*|[_*])|(?:`([^`].*?)`)|(\n\n*|\n{2,}|__|\*\*|[_*])|(^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0))/gm;
        
        var tags = {
			'' : ['<em>','</em>'],
			'_': ['<strong>','</strong>'],
			'\n' : ['<p>','</p>'],
			'-': ['<hr/>']
		};
        
        
        
        function outdent(str) {
			return str.replace(RegExp('^'+(str.match(/^(\t| )+/) || '')[0], 'gm'), '');
		}
		
		function encodeAttr(str) {
			return (str+'').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		}
        
        function table(source) {
            
            return source;
        }
        
        
        

		function parse(source,prevLinks) {
            var token,prev,last,compile,html='',context = [];
            var links = prevLinks || {};
            
           
            
            function tag(token) {
				var desc = tags[token.replace(/\*/g,'_')[1] || ''],
                end = context[context.length-1]==token;
                
				if (!desc) { return token; }
				if (!desc[1]) { return desc[0]; }
				context[end?'pop':'push'](token);
               
				return desc[end|0];
			}
            
            
            
            
            
            source = source.replace(/^\[(.+?)\]:\s*(.+)$/gm, function (s, name, url) {
				links[name.toLowerCase()] = url;
				return '';
			}).replace(/^\n+|\n+$/g, '');
            
            
            while ((token = tokenizer.exec(source)) !== null) {
                
                prev = source.substring(last, token.index);
				last = tokenizer.lastIndex;
				compile = token[0];

                // <h1-6>
                if( token[2] ){
                    var count = token[2].length;
                    compile = '<h' + count + '>' + token[3] + '</h' + count + '>'; 
                }
                
                // <code >
                else if( token[4] ){
                    compile = '<code>'+encodeAttr(token[4])+'</code>';
                }
 
                // <pre>
                else if( token[5]||token[6]){
                    var lang = 'language-'+token[5].toLowerCase().replace(/(^\s*)|(\s*$)/g, "");  
                    compile = '<pre class="code '+lang+'">'+outdent(encodeAttr(token[6] ).replace(/^\n+|\n+$/g, ''))+'</pre>';
                }
                
                // <em> <strong> <hr> <p>
                else if( token[7] || token[1]){
                    compile = tag(token[7]||'---');
                }
                
                else if( token[10]){
                    compile = table(token[0]); 
                }
                
               

     
                html += prev + compile;
            }
			return (html + source.substring(last)).trim();
		};
        module.exports = parse;
	});
})(pxui);