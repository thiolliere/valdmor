// Generated from assets/shaders/draw2D.cgfx
var draw2D_cgfx : any =
{
    "version": 1,
    "name": "draw2D.cgfx",
    "samplers":
    {
        "texture":
        {
            "MinFilter": 9985,
            "MagFilter": 9729,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "npottexture":
        {
            "MinFilter": 9728,
            "MagFilter": 9729,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "inputTexture0":
        {
            "MinFilter": 9728,
            "MagFilter": 9729,
            "WrapS": 33071,
            "WrapT": 33071
        }
    },
    "parameters":
    {
        "clipSpace":
        {
            "type": "float",
            "columns": 4
        },
        "copyUVScale":
        {
            "type": "float",
            "columns": 2
        },
        "copyFlip":
        {
            "type": "float"
        },
        "texture":
        {
            "type": "sampler2D"
        },
        "npottexture":
        {
            "type": "sampler2D"
        },
        "inputTexture0":
        {
            "type": "sampler2D"
        }
    },
    "techniques":
    {
        "opaque":
        [
            {
                "parameters": ["clipSpace","texture"],
                "semantics": ["ATTR0","ATTR3","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_draw2D","fp_draw2D"]
            }
        ],
        "opaquenomip":
        [
            {
                "parameters": ["clipSpace","npottexture"],
                "semantics": ["ATTR0","ATTR3","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_draw2D","fp_draw2D_nomips"]
            }
        ],
        "alpha":
        [
            {
                "parameters": ["clipSpace","texture"],
                "semantics": ["ATTR0","ATTR3","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [770,771]
                },
                "programs": ["vp_draw2D","fp_draw2D"]
            }
        ],
        "alphanomip":
        [
            {
                "parameters": ["clipSpace","npottexture"],
                "semantics": ["ATTR0","ATTR3","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [770,771]
                },
                "programs": ["vp_draw2D","fp_draw2D_nomips"]
            }
        ],
        "additive":
        [
            {
                "parameters": ["clipSpace","texture"],
                "semantics": ["ATTR0","ATTR3","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [770,1]
                },
                "programs": ["vp_draw2D","fp_draw2D"]
            }
        ],
        "additivenomip":
        [
            {
                "parameters": ["clipSpace","npottexture"],
                "semantics": ["ATTR0","ATTR3","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [770,1]
                },
                "programs": ["vp_draw2D","fp_draw2D_nomips"]
            }
        ],
        "copy":
        [
            {
                "parameters": ["copyUVScale","copyFlip","inputTexture0"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_copy","fp_copy"]
            }
        ]
    },
    "programs":
    {
        "fp_copy":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _ret_0;uniform sampler2D inputTexture0;void main()\n{_ret_0=texture2D(inputTexture0,tz_TexCoord[0].xy);gl_FragColor=_ret_0;}"
        },
        "vp_copy":
        {
            "type": "vertex",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];attribute vec4 ATTR0;attribute vec4 ATTR8;\nvec4 _OutPosition1;vec2 _OutUV1;uniform vec2 copyUVScale;uniform float copyFlip;void main()\n{_OutPosition1.x=ATTR0.x;_OutPosition1.y=ATTR0.y*copyFlip;_OutPosition1.zw=ATTR0.zw;_OutUV1=ATTR8.xy*copyUVScale;tz_TexCoord[0].xy=_OutUV1;gl_Position=_OutPosition1;}"
        },
        "fp_draw2D_nomips":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying TZ_LOWP vec4 tz_Color;varying vec4 tz_TexCoord[1];\nvec4 _ret_0;vec4 _TMP0;uniform sampler2D npottexture;void main()\n{_TMP0=texture2D(npottexture,tz_TexCoord[0].xy);_ret_0=tz_Color*_TMP0;gl_FragColor=_ret_0;}"
        },
        "vp_draw2D":
        {
            "type": "vertex",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying TZ_LOWP vec4 tz_Color;varying vec4 tz_TexCoord[1];attribute vec4 ATTR0;attribute vec4 ATTR3;attribute vec4 ATTR8;\nvec4 _OUTColor1;vec4 _OUTPosition1;vec2 _OUTTexCoord01;uniform vec4 clipSpace;void main()\n{vec2 _position;_position=ATTR0.xy*clipSpace.xy+clipSpace.zw;_OUTPosition1.x=_position.x;_OUTPosition1.y=_position.y;_OUTPosition1.z=0.0;_OUTPosition1.w=1.0;_OUTColor1=ATTR3;_OUTTexCoord01=ATTR8.xy;tz_TexCoord[0].xy=ATTR8.xy;gl_Position=_OUTPosition1;tz_Color=ATTR3;}"
        },
        "fp_draw2D":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying TZ_LOWP vec4 tz_Color;varying vec4 tz_TexCoord[1];\nvec4 _ret_0;vec4 _TMP0;uniform sampler2D texture;void main()\n{_TMP0=texture2D(texture,tz_TexCoord[0].xy);_ret_0=tz_Color*_TMP0;gl_FragColor=_ret_0;}"
        }
    }
}

