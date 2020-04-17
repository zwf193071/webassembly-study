(module
    (func (export "transformToSecond") (param $p1 i32) (param $p2 i32) (param $p3 i32) (result i32)
        i32.const 86400
        get_local $p1
        i32.mul ;; multiply $p1 and 86400
        i32.const 3600
        get_local $p2
        i32.mul
        i32.add
        i32.const 60
        get_local $p3
        i32.mul
        i32.add
    )
)