// Generated from assets/shaders/particles-sort.cgfx
var particles_sort_cgfx : any =
{
    "version": 1,
    "name": "particles-sort.cgfx",
    "samplers":
    {
        "previousState":
        {
            "MinFilter": 9728,
            "MagFilter": 9728,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "creationState":
        {
            "MinFilter": 9728,
            "MagFilter": 9728,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "mappingTable":
        {
            "MinFilter": 9728,
            "MagFilter": 9728,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "vParticleState":
        {
            "MinFilter": 9728,
            "MagFilter": 9728,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "fParticleState":
        {
            "MinFilter": 9728,
            "MagFilter": 9728,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "animation":
        {
            "MinFilter": 9728,
            "MagFilter": 9728,
            "WrapS": 33071,
            "WrapT": 33071
        }
    },
    "parameters":
    {
        "textureSize":
        {
            "type": "float",
            "columns": 2
        },
        "invTextureSize":
        {
            "type": "float",
            "columns": 2
        },
        "regionSize":
        {
            "type": "float",
            "columns": 2
        },
        "invRegionSize":
        {
            "type": "float",
            "columns": 2
        },
        "regionPos":
        {
            "type": "float",
            "columns": 2
        },
        "halfExtents":
        {
            "type": "float",
            "columns": 3
        },
        "center":
        {
            "type": "float",
            "columns": 3
        },
        "maxLifeTime":
        {
            "type": "float"
        },
        "previousState":
        {
            "type": "sampler2D"
        },
        "shift":
        {
            "type": "float",
            "columns": 3
        },
        "timeStep":
        {
            "type": "float"
        },
        "lifeStep":
        {
            "type": "float"
        },
        "maxSpeed":
        {
            "type": "float"
        },
        "creationState":
        {
            "type": "sampler2D"
        },
        "creationScale":
        {
            "type": "float",
            "columns": 2
        },
        "projection":
        {
            "type": "float",
            "rows": 4,
            "columns": 4
        },
        "modelView":
        {
            "type": "float",
            "rows": 4,
            "columns": 3
        },
        "mappingTable":
        {
            "type": "sampler2D"
        },
        "mappingSize":
        {
            "type": "float",
            "columns": 2
        },
        "invMappingSize":
        {
            "type": "float",
            "columns": 2
        },
        "mappingPos":
        {
            "type": "float",
            "columns": 2
        },
        "vParticleState":
        {
            "type": "sampler2D"
        },
        "fParticleState":
        {
            "type": "sampler2D"
        },
        "PARTICLE_POS":
        {
            "type": "float",
            "columns": 2,
            "values": [0.5,0.5]
        },
        "PARTICLE_VEL":
        {
            "type": "float",
            "columns": 2,
            "values": [1.5,0.5]
        },
        "PARTICLE_LIFE":
        {
            "type": "float",
            "columns": 2,
            "values": [2.5,0.5]
        },
        "PARTICLE_ANIM":
        {
            "type": "float",
            "columns": 2,
            "values": [2.5,1.5]
        },
        "PARTICLE_DATA":
        {
            "type": "float",
            "columns": 2,
            "values": [2.5,2.5]
        },
        "animationSize":
        {
            "type": "float",
            "columns": 2
        },
        "animation":
        {
            "type": "sampler2D"
        },
        "zSorted":
        {
            "type": "bool"
        },
        "zBound":
        {
            "type": "float"
        },
        "cpass":
        {
            "type": "float"
        },
        "PmS":
        {
            "type": "float"
        },
        "twoStage":
        {
            "type": "float"
        },
        "twoStage_PmS_1":
        {
            "type": "float"
        }
    },
    "techniques":
    {
        "prepare_sort":
        [
            {
                "parameters": ["regionSize","invMappingSize","mappingPos","textureSize","invTextureSize","regionSize","invRegionSize","regionPos","modelView","mappingTable","invMappingSize","mappingPos","fParticleState","PARTICLE_POS","PARTICLE_LIFE","zBound"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_update_mapping","fp_prepare_sort"]
            }
        ],
        "sort_pass":
        [
            {
                "parameters": ["regionSize","invMappingSize","mappingPos","regionSize","invRegionSize","mappingTable","invMappingSize","mappingPos","cpass","PmS","twoStage","twoStage_PmS_1"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_update_mapping","fp_merge_sort_pass"]
            }
        ]
    },
    "programs":
    {
        "fp_merge_sort_pass":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _TMP7;float _TMP11;float _TMP12;vec2 _TMP6;vec2 _TMP5;float _TMP10;float _TMP2;float _TMP3;float _TMP4;float _TMP1;vec2 _TMP0;vec2 _p0054;vec2 _x0056;float _x0060;float _x0064;float _x0066;float _u0068;float _index0068;float _v0068;float _y0070;float _x0072;float _TMP83;float _TMP95;uniform vec2 regionSize;uniform vec2 invRegionSize;uniform sampler2D mappingTable;uniform vec2 invMappingSize;uniform vec2 mappingPos;uniform float cpass;uniform float PmS;uniform float twoStage;uniform float twoStage_PmS_1;void main()\n{vec4 _self;float _index1;float _j;float _compare;vec4 _other;_TMP0=(mappingPos+regionSize*tz_TexCoord[0].xy*vec2(3.33333343E-01,3.33333343E-01))*invMappingSize;_self=texture2D(mappingTable,_TMP0);_x0056=(tz_TexCoord[0].xy*regionSize)/vec2(3.0,3.0);_p0054=floor(_x0056);_index1=(_p0054.y*regionSize.x)/3.0+_p0054.x;_x0060=_index1/twoStage;_TMP10=floor(_x0060);_TMP1=_index1-twoStage*_TMP10;_j=floor(_TMP1);if(_j<PmS||_j>twoStage_PmS_1){_TMP2=0.0;}else{_x0064=(_j+PmS)/cpass;_x0066=_x0064/2.0;_TMP10=floor(_x0066);_TMP4=_x0064-2.0*_TMP10;if(_TMP4<1.0){_TMP3=1.0;}else{_TMP3=-1.0;}\n_TMP2=_TMP3;}\n_compare=float(_TMP2);_index0068=_index1+_compare*cpass;_y0070=regionSize.x/3.0;_x0072=_index0068/_y0070;_TMP10=floor(_x0072);_u0068=_index0068-_y0070*_TMP10;_v0068=(_index0068-_u0068)*invRegionSize.x*3.0;_TMP5=vec2(_u0068+0.5,_v0068+0.5)*invRegionSize*vec2(3.0,3.0);_TMP6=(mappingPos+regionSize*_TMP5*vec2(3.33333343E-01,3.33333343E-01))*invMappingSize;_other=texture2D(mappingTable,_TMP6);_TMP11=dot(_self.zw,vec2(3.89099121E-03,9.96093750E-01));_TMP12=min(1.0,_TMP11);_TMP83=max(0.0,_TMP12);_TMP11=dot(_other.zw,vec2(3.89099121E-03,9.96093750E-01));_TMP12=min(1.0,_TMP11);_TMP95=max(0.0,_TMP12);if(_TMP83*_compare<=_TMP95*_compare){_TMP7=_self;}else{_TMP7=_other;}\ngl_FragColor=_TMP7;}"
        },
        "vp_update_mapping":
        {
            "type": "vertex",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];attribute vec4 ATTR0;\nvec4 _outPosition1;vec2 _outParticle1;vec2 _TMP0;uniform vec2 regionSize;uniform vec2 invMappingSize;uniform vec2 mappingPos;void main()\n{vec2 _TMP37;_TMP0=(mappingPos+regionSize*ATTR0.xy*vec2(3.33333343E-01,3.33333343E-01))*invMappingSize;_TMP37=_TMP0*2.0-1.0;_outPosition1=vec4(_TMP37.x,_TMP37.y,0.0,1.0);_outParticle1=ATTR0.xy;tz_TexCoord[0].xy=ATTR0.xy;gl_Position=_outPosition1;}"
        },
        "fp_prepare_sort":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _ret_0;vec2 _TMP14;float _TMP16;float _TMP9;float _TMP7;float _TMP5;vec4 _TMP8;float _TMP15;vec4 _TMP6;vec4 _TMP4;vec4 _TMP2;float _TMP11;vec4 _TMP1;vec2 _TMP0;vec2 _p0061;vec2 _c0063;float _TMP70;vec2 _c0077;float _TMP86;vec2 _c0093;float _TMP102;vec2 _c0109;float _TMP118;vec2 _TMP124;vec2 _enc10125;float _TMP128;vec2 _x0135;uniform vec2 textureSize;uniform vec2 invTextureSize;uniform vec2 regionSize;uniform vec2 invRegionSize;uniform vec2 regionPos;uniform vec3 modelView[4];uniform sampler2D mappingTable;uniform vec2 invMappingSize;uniform vec2 mappingPos;uniform sampler2D fParticleState;uniform vec2 PARTICLE_POS;uniform vec2 PARTICLE_LIFE;uniform float zBound;void main()\n{vec2 _particleUV;vec3 _pos1;float _z1;_TMP0=(mappingPos+regionSize*tz_TexCoord[0].xy*vec2(3.33333343E-01,3.33333343E-01))*invMappingSize;_TMP1=texture2D(mappingTable,_TMP0);_p0061=(_TMP1.xy*255.0)*vec2(3.0,3.0)*invRegionSize;_particleUV=(regionPos+regionSize*_p0061)*invTextureSize;_c0063=(_particleUV*textureSize+PARTICLE_LIFE)*invTextureSize;_TMP2=texture2D(fParticleState,_c0063);_TMP11=dot(_TMP2.zw,vec2(3.89099121E-03,9.96093750E-01));_TMP16=min(1.0,_TMP11);_TMP70=max(0.0,_TMP16);if(_TMP70<=0.0){_ret_0=vec4(_TMP1.x,_TMP1.y,1.0,1.0);gl_FragColor=_ret_0;return;}else{_c0077=(_particleUV*textureSize+PARTICLE_POS)*invTextureSize;_TMP4=texture2D(fParticleState,_c0077);_TMP15=dot(_TMP4,vec4(5.93718141E-08,1.51991844E-05,3.89099121E-03,9.96093750E-01));_TMP16=min(1.0,_TMP15);_TMP86=max(0.0,_TMP16);_TMP5=(_TMP86-0.5)*2.0;_c0093=(_particleUV*textureSize+PARTICLE_POS+vec2(0.0,1.0))*invTextureSize;_TMP6=texture2D(fParticleState,_c0093);_TMP15=dot(_TMP6,vec4(5.93718141E-08,1.51991844E-05,3.89099121E-03,9.96093750E-01));_TMP16=min(1.0,_TMP15);_TMP102=max(0.0,_TMP16);_TMP7=(_TMP102-0.5)*2.0;_c0109=(_particleUV*textureSize+PARTICLE_POS+vec2(0.0,2.0))*invTextureSize;_TMP8=texture2D(fParticleState,_c0109);_TMP15=dot(_TMP8,vec4(5.93718141E-08,1.51991844E-05,3.89099121E-03,9.96093750E-01));_TMP16=min(1.0,_TMP15);_TMP118=max(0.0,_TMP16);_TMP9=(_TMP118-0.5)*2.0;_pos1=vec3(_TMP5,_TMP7,_TMP9);_z1=_pos1.x*modelView[0].z+_pos1.y*modelView[1].z+_pos1.z*modelView[2].z;_z1=(_z1+zBound)/(2.0*zBound);if(_z1>=1.0){_TMP124=vec2(1.0,1.0);}else{_TMP16=min(1.0,_z1);_TMP128=max(0.0,_TMP16);_x0135=_TMP128*vec2(256.0,1.0);_TMP14=fract(_x0135);_enc10125=_TMP14*256.0;_enc10125.y=_enc10125.y-_enc10125.x/256.0;_TMP124=_enc10125/255.0;}\n_ret_0=vec4(_TMP1.x,_TMP1.y,_TMP124.x,_TMP124.y);gl_FragColor=_ret_0;return;}\ngl_FragColor=_ret_0;}"
        }
    }
}

