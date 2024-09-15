import { Color3, Color4,  DefaultRenderingPipeline,  Engine, FreeCamera, HemisphericLight, PointLight, Scene, SceneLoader,  Vector3 } from "@babylonjs/core"
import "@babylonjs/loaders";

export class AppOne {
    engine: Engine;
    scene: Scene;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas)
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
        this.scene = createScene(this.engine, this.canvas)
      
    }

    

    run() {
      
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }



}


var createScene = function (engine: Engine, canvas: HTMLCanvasElement) {
    // this is the default code from the playground:

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new Scene(engine);
    scene.createDefaultEnvironment(
        {
            createGround: false,
            createSkybox: false
        }
    );
    scene.clearColor = Color4.FromHexString("#ffffffff");
    var camera = new FreeCamera("camera", new Vector3(0, 2.5, 10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 1;
    
    //point light
    var light2 = new PointLight("pointLight", new Vector3(0, 5, 0), scene);
    light2.position = new Vector3(-5, 5, 0);
    light2.intensity = 10;
    light2.radius = 110;
    light2.diffuse = new Color3(1, 0, 0);
 

    var light3 = new PointLight("pointLight", new Vector3(0, 5, 0), scene);
    light3.position = new Vector3(5, 5, 0);
    light3.intensity = 10;
    light3.radius = 110;
    light3.diffuse = new Color3(0, 1, 0);
    
    SceneLoader.AppendAsync("", "/mesh/萌三兄弟.glb", scene).then(() => {
        // do nothing
    });
    //mass
    var pipeline = new DefaultRenderingPipeline(
        "defaultPipeline", // The name of the pipeline
        true, // Do you want the pipeline to use HDR texture?
        scene, // The scene instance
        [camera] // The list of cameras to be attached to
    );
    pipeline.samples = 4;
    pipeline.fxaaEnabled = true;
    
    scene.registerBeforeRender(() => {

    });

    return scene;
};