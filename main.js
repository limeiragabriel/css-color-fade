var div    = document.getElementById("mydiv");
var text   = document.getElementById("text");

var colors = [
				["#1abc9c", "TURQUOISE"  ],
				["#2ecc71", "EMERALD"    ],
				["#3498db","PETER RIVER" ], 
				["#9b59b6", "AMETHYST"   ],
				["#34495e", "WET ASPHALT"],
				["#e74c3c", "ALIZARIN"   ],
				["#e67e22", "CARROT"     ]
			];

var index  = 1;

function change(){
	div.style.backgroundColor = colors[index][0];
	text.innerHTML = colors[index][1];

	index = (index >= colors.length -1) ? 0 : index += 1;
}